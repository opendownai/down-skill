#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INDEX_PATH = path.join(__dirname, 'index.html');

const categoryKeywords = {
  'AI/ML': ['ai', 'ml', 'machine learning', 'gpt', 'llm', 'openai', 'anthropic', 'claude', 'gemini', 'model', 'embedding', 'vector', 'neural', 'nlp', 'text generation'],
  'Developer Tools': ['git', 'github', 'cli', 'terminal', 'shell', 'bash', 'docker', 'devops', 'deploy', 'build', 'tool', 'debug', 'code'],
  'Productivity': ['calendar', 'email', 'gmail', 'drive', 'notion', 'slack', 'discord', 'task', 'project', 'workflow', 'automation'],
  'Data': ['database', 'sql', 'api', 'http', 'fetch', 'data', 'analytics', 'query', 'search', 'scrap'],
  'Automation': ['browser', 'automation', 'scrape', 'crawl', 'agent', 'auto', 'schedule', 'cron', 'webhook'],
  'Search': ['search', 'web search', 'tavily', 'brave', 'google search', 'duckduckgo'],
};

const icons = {
  'AI/ML': '🧠',
  'Developer Tools': '🔧',
  'Productivity': '⚡',
  'Data': '📊',
  'Automation': '🤖',
  'Search': '🔍',
  'default': '📦'
};

function inferCategory(name, description) {
  const text = (name + ' ' + description).toLowerCase();
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    for (const keyword of keywords) {
      if (text.includes(keyword)) return category;
    }
  }
  return 'Utility';
}

function formatNumber(num, showPlus = false) {
  const suffix = showPlus ? '+' : '';
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M' + suffix;
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K' + suffix;
  return num.toString() + suffix;
}

function generateSkillCard(skill, rank) {
  const icon = icons[skill.category] || icons.default;
  
  return `      <article class="skill-card">
        <span class="skill-rank">#${rank}</span>
        <div class="skill-icon">${icon}</div>
        <span class="category-tag">${skill.category}</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/${skill.name.toLowerCase().replace(/\s+/g, '-')}" target="_blank">${skill.name}</a>
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
    // Get homepage skills
    await page.goto('https://clawhub.ai/', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    await page.waitForSelector('.skill-card', { timeout: 15000 });

    // Get total skills from the page
    const totalSkills = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      if (h1) {
        const match = h1.textContent.match(/(\d+[\d,]*)\s*skills/i);
        if (match) return parseInt(match[1].replace(/,/g, ''));
      }
      return 13110;
    });

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
        const slug = href.split('/').pop();
        
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
        });
      });

      return skillData;
    });

    // Infer categories
    skills.forEach(skill => {
      skill.category = inferCategory(skill.name, skill.description);
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
    
    const totalDownloads = 13100000;
    const totalStars = 222000;

    const statsBarMatch = html.match(/<div class="stats-bar">[\s\S]*?<\/div>\s*<\/div>\s*<\/header>/);
    if (statsBarMatch) {
      const newStatsBar = `<div class="stats-bar">
        <div class="stat-item">
          <div class="stat-value">${totalSkills.toLocaleString()}+</div>
          <div class="stat-label">Total Skills</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${formatNumber(totalDownloads, true)}</div>
          <div class="stat-label">Downloads</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${formatNumber(totalStars, true)}</div>
          <div class="stat-label">Stars</div>
        </div>
      </div>
    </header>`;
      html = html.replace(statsBarMatch[0], newStatsBar);
    }
    
    fs.writeFileSync(INDEX_PATH, html);
    console.log(`Updated ${skills.length} skills with inferred categories`);
    console.log(`Total skills: ${totalSkills}, Downloads: ${formatNumber(totalDownloads)}, Stars: ${formatNumber(totalStars)}`);
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

scrapeAndUpdate();
