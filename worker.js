const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OpenDown — We are on the verge of the Singularity.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Rajdhani:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
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
    :root[data-theme="light"] {
      --bg-primary: #f5f5f7;
      --bg-secondary: #ffffff;
      --bg-card: #ffffff;
      --accent-cyan: #0891b2;
      --accent-magenta: #db2777;
      --accent-purple: #7c3aed;
      --accent-blue: #2563eb;
      --text-primary: #1d1d1f;
      --text-secondary: #6e6e73;
      --glow-cyan: none;
      --glow-magenta: none;
    }
    @media (prefers-color-scheme: light) {
      :root:not([data-theme="dark"]) {
        --bg-primary: #f5f5f7;
        --bg-secondary: #ffffff;
        --bg-card: #ffffff;
        --accent-cyan: #0891b2;
        --accent-magenta: #db2777;
        --accent-purple: #7c3aed;
        --accent-blue: #2563eb;
        --text-primary: #1d1d1f;
        --text-secondary: #6e6e73;
        --glow-cyan: none;
        --glow-magenta: none;
      }
    }
    :root[data-theme="light"] .skill-card { background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.08); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); }
    :root[data-theme="light"] .skill-card:hover { border-color: rgba(8, 145, 178, 0.3); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); }
    :root[data-theme="light"] .search-box { background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.1); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); }
    :root[data-theme="light"] .search-box input { border: none; background: transparent; }
    :root[data-theme="light"] .search-box input:focus { box-shadow: none; }
    :root[data-theme="light"] .search-box:focus-within { border-color: var(--accent-cyan); box-shadow: 0 4px 16px rgba(8, 145, 178, 0.15); }
    :root[data-theme="light"] .category-btn { background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.1); color: var(--text-secondary); }
    :root[data-theme="light"] .category-btn.active, :root[data-theme="light"] .category-btn:hover { background: var(--accent-cyan); border-color: var(--accent-cyan); color: #ffffff; }
    :root[data-theme="light"] .stats-bar { background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.08); }
    :root[data-theme="light"] .badge { background: rgba(0, 0, 0, 0.05); border: 1px solid rgba(0, 0, 0, 0.1); }
    :root[data-theme="light"] .theme-btn { background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.1); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); }
    :root[data-theme="light"] .skill-rank { background: #ffffff; border: 2px solid var(--accent-purple); color: var(--accent-purple); box-shadow: 0 2px 8px rgba(139, 92, 246, 0.2); }
    :root[data-theme="light"] .skill-card:nth-child(1) .skill-rank { border-color: #eab308; color: #eab308; }
    :root[data-theme="light"] .skill-card:nth-child(2) .skill-rank { border-color: #9ca3af; color: #6b7280; }
    :root[data-theme="light"] .skill-card:nth-child(3) .skill-rank { border-color: #d97706; color: #d97706; }
    :root[data-theme="light"] .skill-icon { background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(0, 0, 0, 0.06); }
    :root[data-theme="light"] .bg-grid { background-image: linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px); }
    :root[data-theme="light"] .bg-glow { opacity: 0.08; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Space Grotesk', sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      min-height: 100vh;
      overflow-x: hidden;
    }
    .bg-grid {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-image: 
        linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
      z-index: 0;
    }
    .bg-glow {
      position: fixed;
      width: 600px; height: 600px;
      border-radius: 50%;
      filter: blur(150px);
      opacity: 0.15;
      pointer-events: none;
      z-index: 0;
    }
    .bg-glow-1 { top: -200px; right: -200px; background: var(--accent-cyan); animation: float 8s ease-in-out infinite; }
    .bg-glow-2 { bottom: -200px; left: -200px; background: var(--accent-magenta); animation: float 10s ease-in-out infinite reverse; }
    @keyframes float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, 30px); } }
    .container { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 60px 24px; }
    header { text-align: center; margin-bottom: 80px; }
    .badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 8px 16px;
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(139, 92, 246, 0.1));
      border: 1px solid rgba(0, 245, 255, 0.3);
      border-radius: 100px;
      font-size: 14px; font-weight: 500;
      color: var(--accent-cyan);
      margin-bottom: 24px;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse { 0%, 100% { box-shadow: 0 0 20px rgba(0, 245, 255, 0.2); } 50% { box-shadow: 0 0 40px rgba(0, 245, 255, 0.4); } }
    .badge-dot { width: 8px; height: 8px; background: var(--accent-cyan); border-radius: 50%; animation: blink 1.5s ease-in-out infinite; }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
    .header-top { display: flex; align-items: center; justify-content: center; gap: 16px; }
    .theme-btn { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; padding: 8px; background: var(--bg-card); border: 1px solid rgba(128, 128, 128, 0.2); border-radius: 10px; color: var(--text-secondary); cursor: pointer; transition: all 0.2s ease; position: absolute; right: 24px; top: 24px; }
    .theme-btn:hover { background: rgba(128, 128, 128, 0.1); color: var(--text-primary); }
    .theme-btn svg { width: 20px; height: 20px; }
    .theme-btn .icon-moon { display: none; }
    .h1-opt-1 { font-size: 48px; font-weight: 700; background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-cyan) 50%, var(--accent-magenta) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: -2px; }
    .h1-opt-2 { font-size: 48px; font-weight: 800; color: var(--text-primary); letter-spacing: -3px; text-transform: uppercase; }
    .h1-opt-3 { font-size: 48px; font-weight: 700; color: transparent; -webkit-text-stroke: 1px var(--accent-cyan); letter-spacing: -2px; }
    h1 {
      font-family: 'Orbitron', 'Rajdhani', sans-serif;
      font-weight: 600;
      font-size: clamp(36px, 8vw, 64px);
      letter-spacing: 0.08em;
      background: linear-gradient(90deg, #00f0ff, #a020f0, #00d4ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: 
        0 0 10px rgba(0, 240, 255, 0.6),
        0 0 20px rgba(160, 32, 240, 0.4);
      filter: drop-shadow(0 0 8px rgba(100, 200, 255, 0.5));
      margin-bottom: 16px;
    }
    .subtitle { font-size: 18px; color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.6; }
    .stats-bar { display: flex; justify-content: center; gap: 48px; margin-top: 40px; flex-wrap: wrap; }
    .stat-item { text-align: center; }
    .stat-value { font-size: 32px; font-weight: 700; color: var(--accent-cyan); font-family: 'JetBrains Mono', monospace; }
    .stat-label { font-size: 14px; color: var(--text-secondary); margin-top: 4px; }
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px; }
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
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, var(--accent-cyan), var(--accent-magenta));
      opacity: 0; transition: opacity 0.3s;
    }
    .skill-card:hover { transform: translateY(-8px); border-color: rgba(0, 245, 255, 0.3); box-shadow: var(--glow-cyan); }
    .skill-card:hover::before { opacity: 1; }
    .skill-rank {
      position: absolute; top: 20px; right: 20px;
      width: 36px; height: 36px;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
      border-radius: 10px;
      font-weight: 700; font-size: 14px;
      font-family: 'JetBrains Mono', monospace;
    }
    .skill-card:nth-child(1) .skill-rank { background: linear-gradient(135deg, #ffd700, #ffaa00); color: #000; }
    .skill-card:nth-child(2) .skill-rank { background: linear-gradient(135deg, #c0c0c0, #a0a0a0); color: #000; }
    .skill-card:nth-child(3) .skill-rank { background: linear-gradient(135deg, #cd7f32, #b87333); color: #fff; }
    .skill-icon {
      width: 56px; height: 56px;
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(139, 92, 246, 0.1));
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .skill-name { font-size: 20px; font-weight: 600; margin-bottom: 8px; display: flex; align-items: center; gap: 10px; }
    .skill-name a { color: inherit; text-decoration: none; }
    .skill-name a:hover { color: var(--accent-cyan); }
    .skill-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px; min-height: 42px; }
    .skill-meta { display: flex; gap: 20px; flex-wrap: wrap; }
    .meta-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--text-secondary); font-family: 'JetBrains Mono', monospace; }
    .meta-item svg { width: 16px; height: 16px; opacity: 0.7; }
    .meta-item.downloads { color: var(--accent-cyan); }
    .meta-item.stars { color: #fbbf24; }
    .category-tag { display: inline-block; padding: 4px 12px; background: rgba(139, 92, 246, 0.15); border-radius: 100px; font-size: 12px; color: var(--accent-purple); margin-bottom: 12px; }
    .terminal-hint {
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      padding: 12px 24px;
      background: rgba(30, 30, 40, 0.7);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: var(--text-secondary);
      z-index: 100;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
    :root[data-theme="light"] .terminal-hint {
      background: rgba(255, 255, 255, 0.7);
      border-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8);
    }
    .terminal-hint span { color: var(--accent-cyan); }
    .terminal-hint .copy-btn {
      display: inline-flex; align-items: center; justify-content: center;
      width: 32px; height: 32px; padding: 0; margin-left: 12px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px; color: var(--accent-cyan); cursor: pointer;
      transition: all 0.2s ease;
    }
    :root[data-theme="light"] .terminal-hint .copy-btn {
      background: rgba(0, 0, 0, 0.05); border-color: rgba(0, 0, 0, 0.1);
    }
    .terminal-hint .copy-btn:hover {
      background: rgba(0, 245, 255, 0.2); border-color: var(--accent-cyan);
    }
    .terminal-hint .copy-btn.copied {
      background: rgba(34, 197, 94, 0.2); border-color: #22c55e; color: #22c55e;
    }
    .terminal-hint .copy-btn svg { width: 16px; height: 16px; }
    footer { text-align: center; padding: 40px 24px; color: var(--text-secondary); font-size: 14px; }
    footer a { color: var(--accent-cyan); text-decoration: none; }
    footer a:hover { text-decoration: underline; }
    @media (max-width: 768px) {
      .stats-bar { gap: 24px; }
      .skills-grid { grid-template-columns: 1fr; }
      .terminal-hint { display: none; }
    }
  </style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="bg-glow bg-glow-1"></div>
  <div class="bg-glow bg-glow-2"></div>
  <div class="container">
    <header>
      <div class="header-top">
        <img class="logo" src="https://cdn.opendown.ai/opendown-ai-2.png" alt="OpenDown">
        <button class="theme-btn" id="themeToggle" title="Toggle theme">
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
      </div>
      <div class="badge"><span class="badge-dot"></span>Live Data · Updated 2026-03-01</div>
      <h1>OpenDown</h1>
      <p class="subtitle">ClawHub Top Skills — Curated collection of the most popular AI Agent skills to supercharge your OpenClaw. Based on real download statistics.</p>
      <div class="stats-bar">
        <div class="stat-item"><div class="stat-value">13K+</div><div class="stat-label">Total Skills</div></div>
        <div class="stat-item"><div class="stat-value">47K+</div><div class="stat-label">Forks</div></div>
        <div class="stat-item"><div class="stat-value">243K+</div><div class="stat-label">Stars</div></div>
      </div>
    </header>
    <div class="skills-grid">
      <article class="skill-card"><span class="skill-rank">#1</span><div class="skill-icon">🧠</div><span class="category-tag">AI/ML</span><h2 class="skill-name"><a href="https://clawhub.ai/skills/ontology" target="_blank">Ontology</a></h2><p class="skill-desc">Typed knowledge graph for structured agent memory and composable skills.</p><div class="skill-meta"><span class="meta-item downloads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>91.2K</span><span class="meta-item stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>224</span><span class="meta-item">by @oswalpalash</span></div></article>
      <article class="skill-card"><span class="skill-rank">#2</span><div class="skill-icon">🔄</div><span class="category-tag">Productivity</span><h2 class="skill-name"><a href="https://clawhub.ai/skills/self-improving-agent" target="_blank">Self-Improving Agent</a></h2><p class="skill-desc">Enables AI agents to learn from interactions, capturing learnings and corrections.</p><div class="skill-meta"><span class="meta-item downloads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>81.1K</span><span class="meta-item stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>958</span><span class="meta-item">by @pskoett</span></div></article>
      <article class="skill-card"><span class="skill-rank">#3</span><div class="skill-icon">📧</div><span class="category-tag">Productivity</span><h2 class="skill-name"><a href="https://clawhub.ai/skills/gog" target="_blank">Gog</a></h2><p class="skill-desc">Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs.</p><div class="skill-meta"><span class="meta-item downloads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>75.5K</span><span class="meta-item stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>593</span><span class="meta-item">by @steipete</span></div></article>
      <article class="skill-card"><span class="skill-rank">#4</span><div class="skill-icon">🔍</div><span class="category-tag">Search</span><h2 class="skill-name"><a href="https://clawhub.ai/skills/tavily-search" target="_blank">Tavily Web Search</a></h2><p class="skill-desc">AI-optimized web search via Tavily API. Returns concise results for AI agents.</p><div class="skill-meta"><span class="meta-item downloads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>71.8K</span><span class="meta-item stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>320</span><span class="meta-item">by @arun-8687</span></div></article>
      <article class="skill-card"><span class="skill-rank">#5</span><div class="skill-icon">🧩</div><span class="category-tag">Developer</span><h2 class="skill-name"><a href="https://clawhub.ai/skills/find-skills" target="_blank">Find Skills</a></h2><p class="skill-desc">Helps users discover and install agent skills when they ask "how do I do X".</p><div class="skill-meta"><span class="meta-item downloads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>66.6K</span><span class="meta-item stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>283</span><span class="meta-item">by @JimLiuxinghai</span></div></article>
      <article class="skill-card"><span class="skill-rank">#6</span><div class="skill-icon">📝</div><span class="category-tag">Utility</span><h2 class="skill-name"><a href="https://clawhub.ai/skills/summarize" target="_blank">Summarize</a></h2><p class="skill-desc">Summarize URLs or files with the summarize CLI (web, PDFs, images, audio, YouTube).</p><div class="skill-meta"><span class="meta-item downloads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>62.8K</span><span class="meta-item stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>295</span><span class="meta-item">by @steipete</span></div></article>
      <article class="skill-card"><span class="skill-rank">#7</span><div class="skill-icon">🐙</div><span class="category-tag">Developer</span><h2 class="skill-name"><a href="https://clawhub.ai/skills/github" target="_blank">GitHub</a></h2><p class="skill-desc">Interact with GitHub using the gh CLI. Use gh issue, pr, run, and api commands.</p><div class="skill-meta"><span class="meta-item downloads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>58.8K</span><span class="meta-item stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>198</span><span class="meta-item">by @steipete</span></div></article>
      <article class="skill-card"><span class="skill-rank">#8</span><div class="skill-icon">🌐</div><span class="category-tag">Automation</span><h2 class="skill-name"><a href="https://clawhub.ai/skills/agent-browser" target="_blank">Agent Browser</a></h2><p class="skill-desc">Fast Rust-based headless browser automation CLI with Node.js fallback.</p><div class="skill-meta"><span class="meta-item downloads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>58.6K</span><span class="meta-item stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>304</span><span class="meta-item">by @TheSethRose</span></div></article>
      <article class="skill-card"><span class="skill-rank">#9</span><div class="skill-icon">🌤️</div><span class="category-tag">Utility</span><h2 class="skill-name"><a href="https://clawhub.ai/skills/weather" target="_blank">Weather</a></h2><p class="skill-desc">Get current weather and forecasts (no API key required).</p><div class="skill-meta"><span class="meta-item downloads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>49.7K</span><span class="meta-item stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>170</span><span class="meta-item">by @steipete</span></div></article>
      <article class="skill-card"><span class="skill-rank">#10</span><div class="skill-icon">📈</div><span class="category-tag">Finance</span><h2 class="skill-name"><a href="https://clawhub.ai/skills/polymarketodds" target="_blank">Polymarket</a></h2><p class="skill-desc">Query Polymarket prediction markets - check odds, trending markets, search events.</p><div class="skill-meta"><span class="meta-item downloads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>48.1K</span><span class="meta-item stars"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>115</span><span class="meta-item">by @joelchance</span></div></article>
    </div>
  </div>
  <div class="terminal-hint">
    Install: <span id="install-cmd">npx clawhub@latest install &lt;skill-name&gt;</span>
    <button class="copy-btn" onclick="copyInstallCmd()" title="Copy to clipboard">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    </button>
    <script>!function(){var t=document.getElementById("themeToggle"),e=t.querySelector(".icon-sun"),n=t.querySelector(".icon-moon");function o(o){localStorage.setItem("theme",o),"light"===o?(document.documentElement.setAttribute("data-theme","light"),e.style.display="block",n.style.display="none"):(document.documentElement.removeAttribute("data-theme"),e.style.display="none",n.style.display="block")}t.addEventListener("click",(function(){var t=document.documentElement.getAttribute("data-theme");o("light"===t?"dark":"light")}));var r=localStorage.getItem("theme")||"dark";o(r)}();function copyInstallCmd(){const t="npx clawhub@latest install ";navigator.clipboard.writeText(t).then(()=>{const e=document.querySelector('.copy-btn');e.classList.add('copied');e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';setTimeout(()=>{e.classList.remove('copied');e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';},2000)})}</script>
  </div>
  <footer>
    <div class="footer-links">
      <a href="https://github.com/opendownai" target="_blank">GitHub</a>
      <a href="https://discord.gg/gjGb5WEz" target="_blank">Discord</a>
      <a href="https://opendown.ai/docs" target="_blank">Docs</a>
      <a href="https://www.buymeacoffee.com/opendown" target="_blank">Buy Me a Coffee</a>
      <a href="mailto:support@opendown.ai">Contact</a>
    </div>
    <p class="discord-invite">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
      Join our community to discuss skills & suggest rankings →
      <a href="https://discord.gg/gjGb5WEz" target="_blank">discord.gg/gjGb5WEz</a>
    </p>
    <p class="changelog">Recently added: AI/ML category spotlight • Dev Tools expansion • Real-time stats updated daily</p>
  </footer>
</body>
</html>`;

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

async function getGithubStatsFromSupabase() {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/skills?slug=eq.__github__&select=description`,
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
    try {
      return JSON.parse(data[0].description);
    } catch (e) {}
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



async function generateStatsBar(skills) {
  const totalSkillsFromDb = await getTotalSkillsFromSupabase();
  const totalSkills = totalSkillsFromDb || skills.length;
  const githubStats = await getGithubStatsFromSupabase();
  
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

  if (urlObject.pathname === "/api/skills" || urlObject.pathname === "/api/top-skills") {
    const cacheKey = new Request(`${urlObject.origin}/api/top-skills`);
    const limit = urlObject.searchParams.get('limit') || 20;
    
    try {
      const response = await fetchWithCache(
        `${SUPABASE_URL}/rest/v1/skills?rank=lt.100&order=rank.asc&limit=${limit}`,
        {
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json'
          }
        },
        cacheKey
      );
      
      const data = await response.json();
      
      const topSkills = data.map(skill => ({
        name: skill.name,
        slug: skill.slug,
        desc: skill.description,
        author: skill.author,
        downloads: skill.downloads,
        stars: skill.stars,
        category: skill.category,
        install_cmd: `npx clawhub@latest install ${skill.slug}`
      }));
      
      return new Response(JSON.stringify(topSkills), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": `public, max-age=${CACHE_TTL}`,
          "Access-Control-Allow-Origin": "*"
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }
  }

  if (urlObject.pathname === "/api/skills/more") {
    const offset = parseInt(urlObject.searchParams.get('offset') || '0');
    const limit = parseInt(urlObject.searchParams.get('limit') || '20');
    
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/skills?rank=gt.100&order=rank.asc&offset=${offset}&limit=${limit}`,
        {
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Failed to fetch', skills: [] }), {
          status: response.status,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        });
      }
      
      const data = await response.json();
      
      const skills = data.map(skill => ({
        name: skill.name,
        slug: skill.slug,
        desc: skill.description,
        author: skill.author,
        downloads: skill.downloads,
        stars: skill.stars,
        category: skill.category,
        install_cmd: `npx clawhub@latest install ${skill.slug}`
      }));
      
      return new Response(JSON.stringify({ skills, hasMore: skills.length === limit }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=300",
          "Access-Control-Allow-Origin": "*"
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message, skills: [] }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
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
