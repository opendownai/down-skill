const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OpenDown - ClawHub Top Skills</title>
  <meta name="description" content="Discover the most popular AI Agent skills for OpenClaw. Browse curated top skills with real download statistics from ClawHub.">
  <meta name="keywords" content="OpenClaw, AI Agent, Skills, Plugins, Extensions, Downloads">
  
  <meta property="og:title" content="OpenDown - ClawHub Top Skills">
  <meta property="og:description" content="Discover the most popular AI Agent skills for OpenClaw. Based on real download statistics.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://opendown.ai">
  <meta property="og:image" content="https://cdn.opendown.ai/opendown-logo.png">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="OpenDown - ClawHub Top Skills">
  <meta name="twitter:description" content="Discover the most popular AI Agent skills for OpenClaw.">
  <meta name="twitter:image" content="https://cdn.opendown.ai/opendown-logo.png">
  
  <link rel="icon" type="image/x-icon" href="https://cdn.opendown.ai/favicon.ico">
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#0a0a0f">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="OpenDown">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #0a0a0f;
      --bg-secondary: #12121a;
      --bg-card: #1a1a25;
      --accent-cyan: #00f5ff;
      --accent-magenta: #ff00ff;
      --accent-purple: #8b5cf6;
      --accent-blue: #3b82f6;
      --text-primary: #ffffff;
      --text-secondary: #a1a1aa;
      --glow-cyan: 0 0 30px rgba(0, 245, 255, 0.3);
      --glow-magenta: 0 0 30px rgba(255, 0, 255, 0.3);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Space Grotesk', sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      min-height: 100vh;
      overflow-x: hidden;
    }

    .bg-grid {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
      z-index: 0;
    }

    .bg-glow {
      position: fixed;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      filter: blur(150px);
      opacity: 0.15;
      pointer-events: none;
      z-index: 0;
    }

    .bg-glow-1 {
      top: -200px;
      right: -200px;
      background: var(--accent-cyan);
      animation: float 8s ease-in-out infinite;
    }

    .bg-glow-2 {
      bottom: -200px;
      left: -200px;
      background: var(--accent-magenta);
      animation: float 10s ease-in-out infinite reverse;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(30px, 30px); }
    }

    .container {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 24px;
    }

    header {
      text-align: center;
      margin-bottom: 80px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(139, 92, 246, 0.1));
      border: 1px solid rgba(0, 245, 255, 0.3);
      border-radius: 100px;
      font-size: 14px;
      font-weight: 500;
      color: var(--accent-cyan);
      margin-bottom: 24px;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(0, 245, 255, 0.2); }
      50% { box-shadow: 0 0 40px rgba(0, 245, 255, 0.4); }
    }

    .badge-dot {
      width: 8px;
      height: 8px;
      background: var(--accent-cyan);
      border-radius: 50%;
      animation: blink 1.5s ease-in-out infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }

    .logo {
      display: block;
      margin: 0 auto 16px;
      height: 48px;
      animation: float 6s ease-in-out infinite;
    }

    h1 {
      font-size: clamp(36px, 8vw, 64px);
      font-weight: 700;
      background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-cyan) 50%, var(--accent-magenta) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 8px;
      letter-spacing: -2px;
    }

    .tagline {
      font-size: 16px;
      font-style: italic;
      color: var(--text-secondary);
      margin-bottom: 20px;
      opacity: 0.8;
    }

    .subtitle {
      font-size: 18px;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .stats-bar {
      display: flex;
      justify-content: center;
      gap: 48px;
      margin-top: 40px;
      flex-wrap: wrap;
    }

    .stat-item {
      text-align: center;
    }

    .stat-value {
      font-size: 32px;
      font-weight: 700;
      color: var(--accent-cyan);
      font-family: 'JetBrains Mono', monospace;
    }

    .stat-label {
      font-size: 14px;
      color: var(--text-secondary);
      margin-top: 4px;
    }

    .search-filter {
      margin-top: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .search-box {
      position: relative;
      width: 100%;
      max-width: 400px;
    }

    .search-box input {
      width: 100%;
      padding: 12px 16px 12px 44px;
      background: var(--bg-secondary);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: var(--text-primary);
      font-size: 16px;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .search-box input:focus {
      border-color: var(--accent-cyan);
      box-shadow: 0 0 0 3px rgba(0, 245, 255, 0.1);
    }

    .search-box input::placeholder {
      color: var(--text-secondary);
    }

    .search-box svg {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      color: var(--text-secondary);
    }

    .category-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }

    .category-btn {
      padding: 8px 16px;
      background: var(--bg-secondary);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 100px;
      color: var(--text-secondary);
      font-size: 14px;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.2s;
    }

    .category-btn:hover {
      border-color: var(--accent-cyan);
      color: var(--text-primary);
    }

    .category-btn.active {
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(139, 92, 246, 0.2));
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
    }

    .no-results {
      text-align: center;
      padding: 60px 20px;
      color: var(--text-secondary);
      grid-column: 1 / -1;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }

    .skill-card {
      background: var(--bg-card);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 20px;
      padding: 28px;
      position: relative;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .skill-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta));
      opacity: 0;
      transition: opacity 0.3s;
    }

    .skill-card:hover {
      transform: translateY(-8px);
      border-color: rgba(0, 245, 255, 0.3);
      box-shadow: var(--glow-cyan);
    }

    .skill-card:hover::before {
      opacity: 1;
    }

    .skill-rank {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      border-radius: 10px;
      font-weight: 700;
      font-size: 14px;
      font-family: 'JetBrains Mono', monospace;
    }

    .skill-card:nth-child(1) .skill-rank {
      background: linear-gradient(135deg, #ffd700, #ffaa00);
      color: #000;
    }

    .skill-card:nth-child(2) .skill-rank {
      background: linear-gradient(135deg, #c0c0c0, #a0a0a0);
      color: #000;
    }

    .skill-card:nth-child(3) .skill-rank {
      background: linear-gradient(135deg, #cd7f32, #a0522d);
      color: #fff;
    }

    .skill-icon {
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(139, 92, 246, 0.1));
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .skill-name {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .skill-name a {
      color: inherit;
      text-decoration: none;
    }

    .skill-name a:hover {
      color: var(--accent-cyan);
    }

    .skill-desc {
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 20px;
      min-height: 42px;
    }

    .skill-meta {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--text-secondary);
      font-family: 'JetBrains Mono', monospace;
    }

    .meta-item svg {
      width: 16px;
      height: 16px;
      opacity: 0.7;
    }

    .meta-item.downloads {
      color: var(--accent-cyan);
    }

    .meta-item.stars {
      color: #fbbf24;
    }

    .category-tag {
      display: inline-block;
      padding: 4px 12px;
      background: rgba(139, 92, 246, 0.15);
      border-radius: 100px;
      font-size: 12px;
      color: var(--accent-purple);
      margin-bottom: 12px;
    }

    .terminal-hint {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 24px;
      background: var(--bg-card);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: var(--text-secondary);
      z-index: 100;
    }

    .terminal-hint span {
      color: var(--accent-cyan);
    }

    footer {
      text-align: center;
      padding: 80px 24px;
      color: var(--text-secondary);
      font-size: 14px;
    }

    footer a {
      color: var(--accent-cyan);
      text-decoration: none;
    }

    footer a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      body {
        padding: 0 16px;
      }
      
      .container {
        padding: 40px 16px;
      }
      
      header {
        margin-bottom: 48px;
      }
      
      .logo {
        height: 36px;
      }
      
      h1 {
        font-size: 32px;
        letter-spacing: -1px;
      }
      
      .subtitle {
        font-size: 15px;
        padding: 0 8px;
      }
      
      .stats-bar {
        gap: 16px;
        flex-wrap: wrap;
        justify-content: center;
      }
      
      .stat-item {
        min-width: 80px;
      }
      
      .stat-value {
        font-size: 20px;
      }
      
      .skill-card {
        padding: 20px;
      }
      
      .skills-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .terminal-hint {
        display: none;
      }
      
      footer {
        padding: 40px 16px;
      }
      
      footer p {
        font-size: 12px;
        line-height: 1.8;
      }
      
      .search-box {
        max-width: 100%;
      }
      
      .category-filters {
        padding: 0 8px;
      }
      
      .category-btn {
        padding: 6px 12px;
        font-size: 13px;
      }
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="bg-glow bg-glow-1"></div>
  <div class="bg-glow bg-glow-2"></div>

  <div class="container">
    <header>
      <img class="logo" src="https://cdn.opendown.ai/opendown-ai-2.png" alt="OpenDown">
      <div class="badge"><span class="badge-dot"></span>Live Data · Updated 2026-03-02</div>
      <h1>OpenDown</h1>
      <p class="tagline">"We are on the verge of the Singularity" — Vernor Vinge</p>
      <p class="subtitle">ClawHub Top Skills — Curated collection of the most popular AI Agent skills to supercharge your OpenClaw. Based on real download statistics.</p>
      
      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-value">13K+</div>
          <div class="stat-label">Total Skills</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">47K+</div>
          <div class="stat-label">Forks</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">243K+</div>
          <div class="stat-label">Stars</div>
        </div>
      </div>
    </header>

    <div class="search-filter">
      <div class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <input type="text" id="searchInput" placeholder="Search skills...">
      </div>
      <div class="category-filters" id="categoryFilters">
        <button class="category-btn active" data-category="all">All</button>
        <button class="category-btn" data-category="AI/ML">AI/ML</button>
        <button class="category-btn" data-category="Developer Tools">Dev Tools</button>
        <button class="category-btn" data-category="Productivity">Productivity</button>
        <button class="category-btn" data-category="Data">Data</button>
        <button class="category-btn" data-category="Automation">Automation</button>
      </div>
    </div>

    <div class="skills-grid" id="skillsGrid">
      <article class="skill-card">
        <span class="skill-rank">#1</span>
        <div class="skill-icon">📊</div>
        <span class="category-tag">Data</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/trello" target="_blank">Trello</a>
        </h2>
        <p class="skill-desc">Manage Trello boards, lists, and cards via the Trello REST API.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            17.6K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            84
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#2</span>
        <div class="skill-icon">🔧</div>
        <span class="category-tag">Developer Tools</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/slack" target="_blank">Slack</a>
        </h2>
        <p class="skill-desc">Use when you need to control Slack from Clawdbot via the slack tool, including reacting to messages or pinning/unpinning items in Slack channels or DMs.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            19.8K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            77
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#3</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/caldav-calendar" target="_blank">Caldav Calendar</a>
        </h2>
        <p class="skill-desc">Sync and query CalDAV calendars (iCloud, Google, Fastmail, Nextcloud, etc.) using vdirsyncer + khal. Works on Linux.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            15.3K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            150
          </span>
          <span class="meta-item">by @Asleep123</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#4</span>
        <div class="skill-icon">⚡</div>
        <span class="category-tag">Productivity</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/answer-overflow" target="_blank">Answer Overflow</a>
        </h2>
        <p class="skill-desc">Search indexed Discord community discussions via Answer Overflow. Find solutions to coding problems, library issues, and community Q&A that only exist in Discord conversations.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            8.8K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            101
          </span>
          <span class="meta-item">by @RhysSullivan</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#5</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/self-improving-agent" target="_blank">self-improving-agent</a>
        </h2>
        <p class="skill-desc">Captures learnings, errors, and corrections to enable continuous improvement. Use when: (1) A command or operation fails unexpectedly, (2) User corrects Clau...</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            82.2K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            974
          </span>
          <span class="meta-item">by @pskoett</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#6</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/gog" target="_blank">Gog</a>
        </h2>
        <p class="skill-desc">Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            75.9K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            597
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#7</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/tavily-web-search" target="_blank">Tavily Web Search</a>
        </h2>
        <p class="skill-desc">AI-optimized web search via Tavily API. Returns concise, relevant results for AI agents.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            72.6K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            325
          </span>
          <span class="meta-item">by @arun-8687</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#8</span>
        <div class="skill-icon">🤖</div>
        <span class="category-tag">Automation</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/find-skills" target="_blank">Find Skills</a>
        </h2>
        <p class="skill-desc">Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            67.6K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            289
          </span>
          <span class="meta-item">by @JimLiuxinghai</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#9</span>
        <div class="skill-icon">🔧</div>
        <span class="category-tag">Developer Tools</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/summarize" target="_blank">Summarize</a>
        </h2>
        <p class="skill-desc">Summarize URLs or files with the summarize CLI (web, PDFs, images, audio, YouTube).</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            63.5K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            297
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#10</span>
        <div class="skill-icon">🔧</div>
        <span class="category-tag">Developer Tools</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/github" target="_blank">Github</a>
        </h2>
        <p class="skill-desc">Interact with GitHub using the \`gh\` CLI. Use \`gh issue\`, \`gh pr\`, \`gh run\`, and \`gh api\` for issues, PRs, CI runs, and advanced queries.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            59.3K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            198
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#11</span>
        <div class="skill-icon">📊</div>
        <span class="category-tag">Data</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/weather" target="_blank">Weather</a>
        </h2>
        <p class="skill-desc">Get current weather and forecasts (no API key required).</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            50.1K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            172
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#12</span>
        <div class="skill-icon">⚡</div>
        <span class="category-tag">Productivity</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/polymarket" target="_blank">Polymarket</a>
        </h2>
        <p class="skill-desc">Query Polymarket prediction markets - check odds, trending markets, search events, track prices and momentum. Includes watchlist alerts, resolution calendar,...</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            48.6K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            121
          </span>
          <span class="meta-item">by @joelchance</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#13</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/proactive-agent" target="_blank">Proactive Agent</a>
        </h2>
        <p class="skill-desc">Transform AI agents from task-followers into proactive partners that anticipate needs and continuously improve. Now with WAL Protocol, Working Buffer, Autonomous Crons, and battle-tested patterns. Part of the Hal Stack 🦞</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            47.3K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            312
          </span>
          <span class="meta-item">by @halthelobster</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#14</span>
        <div class="skill-icon">🔧</div>
        <span class="category-tag">Developer Tools</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/sonoscli" target="_blank">Sonoscli</a>
        </h2>
        <p class="skill-desc">Control Sonos speakers (discover/status/play/volume/group).</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            43.9K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            30
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#15</span>
        <div class="skill-icon">⚡</div>
        <span class="category-tag">Productivity</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/notion" target="_blank">Notion</a>
        </h2>
        <p class="skill-desc">Notion API for creating and managing pages, databases, and blocks.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            34.3K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            128
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
    </div>
  </div>

  <div class="terminal-hint">
    Install: <span>clawdhub install &lt;skill-name&gt;</span>
  </div>

  <footer>
    <p><a href="https://github.com/opendownai" target="_blank">GitHub</a> | <a href="https://discord.gg/gjGb5WEz" target="_blank">Discord</a> | <a href="https://opendown.ai/docs" target="_blank">Docs</a> | <a href="https://www.buymeacoffee.com/opendown" target="_blank">Buy Me a Coffee</a> | Contact: <a href="mailto:support@opendown.ai">support@opendown.ai</a></p>
  </footer>
  <script>
    const skillsGrid = document.getElementById('skillsGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    let allSkills = [];
    
    function init() {
      const skillCards = document.querySelectorAll('#skillsGrid .skill-card');
      allSkills = Array.from(skillCards).map((card, index) => {
        const category = card.querySelector('.category-tag').textContent.trim();
        const name = card.querySelector('.skill-name a').textContent.trim();
        const desc = card.querySelector('.skill-desc').textContent.trim();
        return { card, category, name, desc, index };
      });
      
      searchInput.addEventListener('input', filterSkills);
      categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          categoryBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          filterSkills();
        });
      });
    }
    
    function filterSkills() {
      const searchTerm = searchInput.value.toLowerCase();
      const activeCategory = document.querySelector('.category-btn.active').dataset.category;
      
      let visibleCount = 0;
      allSkills.forEach(skill => {
        const matchesSearch = skill.name.toLowerCase().includes(searchTerm) || 
                              skill.desc.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
        
        if (matchesSearch && matchesCategory) {
          skill.card.style.display = '';
          visibleCount++;
        } else {
          skill.card.style.display = 'none';
        }
      });
      
      const existingNoResults = skillsGrid.querySelector('.no-results');
      if (existingNoResults) existingNoResults.remove();
      
      if (visibleCount === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = \`
          <p>No skills found matching your search.</p>
          <p style="margin-top: 8px; font-size: 14px;">Try different keywords or categories.</p>
        \`;
        skillsGrid.appendChild(noResults);
      }
    }
    
    document.addEventListener('DOMContentLoaded', init);
    
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  </script>
</body>
</html>
`;

const MANIFEST_JSON = '{}';
const SW_JS = '';

const DOCS_URL = "opendown.mintlify.dev";
const CUSTOM_URL = "opendown.ai";

const SUPABASE_URL = "https://lkwnyiznvyzwxntzaxyy.supabase.co";
const SUPABASE_KEY = "sb_publishable_tKPi80TfMjxEx4qwDWnWMA_n-Duazoq";

const CACHE_TTL = 3600;

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

async function getSkillsFromSupabase() {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/skills?rank=lt.100&order=rank.asc&select=*`,
    {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  if (!response.ok) {
    throw new Error(`Supabase error: ${response.status}`);
  }
  
  return await response.json();
}

async function getTotalSkillsFromSupabase() {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/skills?slug=eq.__meta__&select=description`,
    {
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  if (!response.ok) return null;
  
  const data = await response.json();
  if (data && data[0] && data[0].description) {
    return parseInt(data[0].description);
  }
  return null;
}

function generateSkillCard(skill) {
  const icon = icons[skill.category] || icons.default;
  
  return `<article class="skill-card">
        <span class="skill-rank">#${skill.rank}</span>
        <div class="skill-icon">${icon}</div>
        <span class="category-tag">${skill.category || 'Utility'}</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/${skill.slug}" target="_blank">${skill.name}</a>
        </h2>
        <p class="skill-desc">${skill.description || ''}</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            ${formatNumber(skill.downloads)}
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ${formatNumber(skill.stars)}
          </span>
          <span class="meta-item">by @${skill.author || 'unknown'}</span>
        </div>
      </article>`;
}

async function getGithubStats() {
  try {
    const response = await fetch('https://api.github.com/repos/openclaw/openclaw', {
      headers: { 'User-Agent': 'OpenDown' }
    });
    if (response.ok) {
      const data = await response.json();
      return { stars: data.stargazers_count, forks: data.forks_count };
    }
  } catch (e) {}
  return null;
}

async function generateStatsBar(skills) {
  const totalSkillsFromDb = await getTotalSkillsFromSupabase();
  const totalSkills = totalSkillsFromDb || skills.length;
  const githubStats = await getGithubStats();
  
  return `<div class="stats-bar">
        <div class="stat-item">
          <div class="stat-value">${formatNumber(totalSkills)}+</div>
          <div class="stat-label">Total Skills</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${formatNumber(githubStats?.forks || 0)}+</div>
          <div class="stat-label">Forks</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${formatNumber(githubStats?.stars || 0)}+</div>
          <div class="stat-label">Stars</div>
        </div>
      </div>`;
}

async function fetchWithCache(url, options, cacheKey) {
  const cache = caches.default;
  
  const cached = await cache.match(cacheKey);
  if (cached) {
    return cached;
  }
  
  const response = await fetch(url, options);
  
  if (response.ok) {
    const cloned = response.clone();
    const headers = new Headers(cloned.headers);
    headers.set('Cache-Control', `public, max-age=${CACHE_TTL}`);
    
    const cachedResponse = new Response(await cloned.arrayBuffer(), {
      status: cloned.status,
      statusText: cloned.statusText,
      headers
    });
    
    cache.put(cacheKey, cachedResponse).catch(() => {});
  }
  
  return response;
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const urlObject = new URL(request.url);

  if (urlObject.pathname === "/favicon.ico") {
    return fetch("https://cdn.opendown.ai/favicon.ico");
  }

  if (urlObject.pathname === "/api/skills") {
    const cacheKey = new Request(`${urlObject.origin}/api/skills`);
    
    try {
      const response = await fetchWithCache(
        `${SUPABASE_URL}/rest/v1/skills?rank=lt.100&order=rank.asc`,
        {
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json'
          }
        },
        cacheKey
      );
      
      return new Response(await response.arrayBuffer(), {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": `public, max-age=${CACHE_TTL}`
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  if (urlObject.pathname === "/manifest.json") {
    return new Response(MANIFEST_JSON, {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (urlObject.pathname === "/sw.js") {
    return new Response(SW_JS, {
      headers: { "Content-Type": "application/javascript" },
    });
  }

  if (/^\/docs/.test(urlObject.pathname)) {
    let url = new URL(request.url);
    url.hostname = DOCS_URL;

    let proxyRequest = new Request(url, request);
    proxyRequest.headers.set("Host", DOCS_URL);
    proxyRequest.headers.set("X-Forwarded-Host", CUSTOM_URL);
    proxyRequest.headers.set("X-Forwarded-Proto", "https");

    return await fetch(proxyRequest);
  }

  if (urlObject.pathname === "/" || urlObject.pathname === "") {
    try {
      const skills = await getSkillsFromSupabase();
      
      const today = new Date().toISOString().split('T')[0];
      let html = INDEX_HTML;
      
      html = html.replace(/Updated \d{4}-\d{2}-\d{2}/, `Updated ${today}`);
      
      const statsBarMatch = html.match(/<div class="stats-bar">[\s\S]*?<\/div>\s*<\/div>\s*<\/header>/);
      if (statsBarMatch && skills.length > 0) {
        html = html.replace(statsBarMatch[0], await generateStatsBar(skills) + '\n    </header>');
      }
      
      const skillsGridMatch = html.match(/<div class="skills-grid">[\s\S]*?<\/div>\s*<\/div>\s*<div class="terminal-hint">/);
      if (skillsGridMatch && skills.length > 0) {
        const skillsCards = skills.map(s => generateSkillCard(s)).join('\n      ');
        html = html.replace(skillsGridMatch[0], `<div class="skills-grid">
      ${skillsCards}
    </div>
  </div>

  <div class="terminal-hint">`);
      }
      
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    } catch (error) {
      console.error('Error fetching skills:', error);
      return new Response(INDEX_HTML, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
  }

  return new Response("Not Found", { status: 404 });
}
