#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INDEX_PATH = path.join(__dirname, 'index.html');

const CLAWHUB_API = 'https://api.clawhub.ai/skills';
const TOP_SKILLS_COUNT = 20;

async function fetchSkills() {
  try {
    const response = await fetch(`${CLAWHUB_API}?sort=downloads&limit=${TOP_SKILLS_COUNT}`);
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    return data.skills || [];
  } catch (error) {
    console.error('Error fetching skills:', error.message);
    return null;
  }
}

function generateSkillCard(skill, rank) {
  const icons = {
    'AI/ML': '🧠',
    'Developer Tools': '🔧',
    'Productivity': '⚡',
    'Data': '📊',
    'Automation': '🤖',
    'default': '📦'
  };
  
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

function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

async function updateData() {
  const skills = await fetchSkills();
  if (!skills) {
    console.log('Using existing data (fetch failed)');
    return;
  }
  
  let html = fs.readFileSync(INDEX_PATH, 'utf-8');
  
  const skillsGridMatch = html.match(/<div class="skills-grid" id="skillsGrid">[\s\S]*?<\/div>\s*<\/div>\s*<\/header>/);
  if (!skillsGridMatch) {
    console.error('Could not find skills grid in HTML');
    return;
  }
  
  const skillsCards = skills.map((skill, i) => generateSkillCard(i + 1)).join('\n');
  const newSkillsGrid = `<div class="skills-grid" id="skillsGrid">
${skillsCards}
      </div>
    </header>`;
  
  html = html.replace(skillsGridMatch[0], newSkillsGrid);
  
  const today = new Date().toISOString().split('T')[0];
  html = html.replace(/Updated \d{4}-\d{2}-\d{2}/, `Updated ${today}`);
  
  const totalSkills = skills.length;
  const totalDownloads = skills.reduce((sum, s) => sum + s.downloads, 0);
  const totalStars = skills.reduce((sum, s) => sum + s.stars, 0);
  
  html = html.replace(/Total Skills.*?\d+\.?\d*[KM]?\+/, `Total Skills · ${formatNumber(totalSkills)}+`);
  html = html.replace(/Downloads.*?\d+\.?\d*[KM]?\+/, `Downloads · ${formatNumber(totalDownloads)}+`);
  html = html.replace(/Stars.*?\d+\.?\d*[KM]?\+/, `Stars · ${formatNumber(totalStars)}+`);
  
  fs.writeFileSync(INDEX_PATH, html);
  console.log(`Updated ${skills.length} skills`);
}

updateData();
