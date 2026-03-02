#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const INDEX_PATH = path.join(__dirname, 'index.html');

const SUPABASE_URL = process.env.SUPABASE_URL || "https://lkwnyiznvyzwxntzaxyy.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

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
    await page.goto('https://clawhub.ai/skills?sort=downloads', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    await page.waitForSelector('main a[href*="/"]', { timeout: 15000 });

    // Get total skills from the page
    const totalSkills = await page.evaluate(() => {
      const heading = document.querySelector('h1');
      if (heading) {
        const match = heading.textContent.match(/Skills\s*\(?([\d,]+)\)?/i);
        if (match) return parseInt(match[1].replace(/,/g, ''));
      }
      return 13564;
    });

    const skills = await page.evaluate(() => {
      const links = document.querySelectorAll('main a[href*="/"]');
      const skillData = [];

      const parseNum = (text, isK = false) => {
        if (!text) return 0;
        const num = parseFloat(text.replace(/,/g, ''));
        if (isK) return Math.round(num * 1000);
        return Math.round(num);
      };

      links.forEach(link => {
        const text = link.textContent || '';
        const href = link.href;
        
        // Extract slug from URL: https://clawhub.ai/author/slug
        const urlMatch = href.match(/clawhub\.ai\/[\w-]+\/([a-z0-9-]+)/i);
        const slug = urlMatch ? urlMatch[1] : '';
        
        // Name is before the slash
        const name = text.split('/')[0].trim();
        
        // Description: Find slug in text and extract description after it
        let description = '';
        const firstSlugIndex = text.indexOf('/' + slug);
        if (firstSlugIndex > 0) {
          // Look for second occurrence or just take after first /slug
          const afterFirst = text.substring(firstSlugIndex + slug.length + 1);
          if (afterFirst.startsWith(slug)) {
            // Second occurrence exists, use it
            description = afterFirst.substring(slug.length);
          } else {
            // Only one occurrence
            description = afterFirst;
          }
        }
        // Remove leading slash/dot if present
        description = description.replace(/^[.\/]/, '');
        description = description.replace(/by\s*@[\w-]+.*$/, '').replace(/★.*$/, '').trim();
        
        // Match downloads like "86.2k", "77.2k"
        const downloadMatch = text.match(/(\d+\.?\d*)\s*[kK]/);
        
        // Extract stars more carefully - take the number right after ★, up to 4 digits (to avoid version numbers)
        const starsRawMatch = text.match(/★\s*(\d{1,4})/);
        let stars = 0;
        if (starsRawMatch) {
          const numStr = starsRawMatch[1];
          // Check if followed by 'k' (meaning thousands)
          const afterStars = text.substring(text.indexOf(starsRawMatch[0]) + starsRawMatch[0].length);
          if (afterStars.match(/^\s*k/i)) {
            stars = parseInt(numStr) * 1000;
          } else {
            stars = parseInt(numStr);
          }
        }
        
        const authorMatch = text.match(/by\s*@(\S+?)(?:\s+\d)/);
        
        const author = authorMatch ? authorMatch[1] : 'unknown';
        const downloads = downloadMatch ? parseNum(downloadMatch[1], true) : 0;

        if (name && slug && downloads > 0) {
          skillData.push({
            slug,
            name,
            description: description.substring(0, 200),
            downloads,
            stars,
            author,
          });
        }
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

    const statsBarMatch = html.match(/<div class="stats-bar">[\s\S]*?<\/div>\s*<\/header>/);
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
    
    if (SUPABASE_KEY) {
      await upsertToSupabase(skills);
      await updateGithubStats();
    } else {
      console.log('SUPABASE_SERVICE_KEY not set, skipping Supabase update');
    }
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

async function upsertToSupabase(skills) {
  console.log('Upserting skills to Supabase...');
  
  const records = skills.map((skill, i) => ({
    slug: skill.slug,
    name: skill.name,
    description: skill.description,
    category: skill.category,
    downloads: skill.downloads,
    stars: skill.stars,
    author: skill.author,
    rank: i + 1,
    updated_at: new Date().toISOString()
  }));
  
  const response = await fetch(`${SUPABASE_URL}/rest/v1/skills`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify(records)
  });
  
  if (!response.ok) {
    const error = await response.text();
    console.error('Supabase error:', error);
    return;
  }
  
  console.log(`Successfully upserted ${records.length} skills to Supabase`);
}

async function updateGithubStats() {
  console.log('Fetching GitHub stats...');
  
  try {
    const response = await fetch('https://api.github.com/repos/openclaw/openclaw', {
      headers: { 'User-Agent': 'OpenDown-Update' }
    });
    
    if (!response.ok) {
      console.error('GitHub API error:', response.status);
      return;
    }
    
    const data = await response.json();
    const stats = { forks: data.forks_count, stars: data.stargazers_count };
    console.log(`GitHub: ${stats.forks} forks, ${stats.stars} stars`);
    
    const res = await fetch(`${SUPABASE_URL}/rest/v1/skills?slug=eq.__github__`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ name: 'GitHub Stats', description: JSON.stringify(stats) })
    });
    
    if (!res.ok) {
      await fetch(`${SUPABASE_URL}/rest/v1/skills`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify([{ slug: '__github__', name: 'GitHub Stats', description: JSON.stringify(stats) }])
      });
    }
    
    console.log('GitHub stats saved to Supabase');
  } catch (error) {
    console.error('Failed to fetch GitHub stats:', error.message);
  }
}

scrapeAndUpdate();
