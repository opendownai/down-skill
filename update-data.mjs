#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INDEX_PATH = path.join(__dirname, 'index.html');

const icons = {
  'AI/ML': '🧠',
  'Developer Tools': '🔧',
  'Productivity': '⚡',
  'Data': '📊',
  'Automation': '🤖',
  'Search': '🔍',
  'default': '📦'
};

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

function generateSkillCard(skill, rank) {
  const icon = icons[skill.category] || icons.default;
  
  return `      <article class="skill-card">
        <span class="skill-rank">#${rank}</span>
        <div class="skill-icon">${icon}</div>
        <span class="category-tag">${skill.category}</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/${skill.slug}" target="_blank">${skill.name}</a>
        </h2>
        <p class="skill-desc">${skill.description}</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            ${formatNumber(skill.downloads)}
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ${formatNumber(skill.stars)}
          </span>
          <span class="meta-item">by @${skill.author}</span>
        </div>
      </article>`;
}

async function scrapeAndUpdate() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://clawhub.ai/', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    await page.waitForSelector('.skill-card', { timeout: 15000 });

    const skills = await page.evaluate(() => {
      const cards = document.querySelectorAll('.skill-card');
      const skillData = [];

      const parseNum = (text) => {
        if (!text) return 0;
        const upperText = text.toUpperCase();
        const num = parseFloat(text.replace(/,/g, ''));
        if (upperText.includes('K')) return Math.round(num * 1000);
        if (upperText.includes('M')) return Math.round(num * 1000000);
        if (upperText.includes('B')) return Math.round(num * 1000000000);
        return Math.round(num);
      };

      cards.forEach(card => {
        const href = card.getAttribute('href');
        const slug = href.replace('/', '');
        
        const titleEl = card.querySelector('.skill-card-title');
        const name = titleEl?.textContent?.trim() || '';
        
        const summaryEl = card.querySelector('.skill-card-summary');
        const description = summaryEl?.textContent?.trim() || '';

        const authorEl = card.querySelector('.user-handle');
        const author = authorEl?.textContent?.trim().replace('@', '') || 'unknown';

        const footerText = card.querySelector('.skill-card-footer')?.textContent || '';
        
        const downloadMatch = footerText.match(/([\d,]+\.?\d*)K/i);
        const downloads = downloadMatch ? Math.round(parseFloat(downloadMatch[1]) * 1000) : 0;

        const starsMatch = footerText.match(/⭐\s*([\d,]+)/);
        const stars = starsMatch ? parseInt(starsMatch[1].replace(/,/g, '')) : 0;

        skillData.push({
          slug,
          name,
          description,
          downloads,
          stars,
          author,
          category: 'Utility'
        });
      });

      return skillData;
    });

    let html = fs.readFileSync(INDEX_PATH, 'utf-8');
    
    const skillsGridMatch = html.match(/<div class="skills-grid" id="skillsGrid">[\s\S]*?<\/div>\s*<\/div>\s*<div class="terminal-hint">/);
    if (!skillsGridMatch) {
      console.error('Could not find skills grid in HTML');
      return;
    }
    
    const skillsCards = skills.map((skill, i) => generateSkillCard(skill, i + 1)).join('\n');
    const newSkillsGrid = `<div class="skills-grid" id="skillsGrid">
${skillsCards}
    </div>
  </div>

  <div class="terminal-hint">`;
    
    html = html.replace(skillsGridMatch[0], newSkillsGrid);
    
    const today = new Date().toISOString().split('T')[0];
    html = html.replace(/Updated \d{4}-\d{2}-\d{2}/, `Updated ${today}`);
    
    const totalSkills = skills.length;
    const totalDownloads = skills.reduce((sum, s) => sum + s.downloads, 0);
    const totalStars = skills.reduce((sum, s) => sum + s.stars, 0);

    html = html.replace(/>\d+\.?\d*[KM]?\+</,
      `>${formatNumber(totalSkills)}<`);
    html = html.replace(/>\d+\.?\d*[KM]?\+</,
      `>${formatNumber(totalDownloads)}<`);
    html = html.replace(/>\d+\.?\d*[KM]?\+</,
      `>${formatNumber(totalStars)}<`);
    
    fs.writeFileSync(INDEX_PATH, html);
    console.log(`Updated ${skills.length} skills from homepage`);
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

scrapeAndUpdate();
