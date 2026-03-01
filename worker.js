const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OpenDown - ClawHub Top Skills</title>
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
    h1 {
      font-size: clamp(36px, 8vw, 64px);
      font-weight: 700;
      background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-cyan) 50%, var(--accent-magenta) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 16px;
      letter-spacing: -2px;
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
    .skill-card:nth-child(3) .skill-rank { background: linear-gradient(135deg, #cd7f32, #a0522d); color: #fff; }
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
      background: var(--bg-card);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: var(--text-secondary);
      z-index: 100;
    }
    .terminal-hint span { color: var(--accent-cyan); }
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
      <div class="badge"><span class="badge-dot"></span>Live Data · Updated 2026-03-01</div>
      <h1>OpenDown</h1>
      <p class="subtitle">ClawHub Top Skills — Curated collection of the most popular AI Agent skills to supercharge your OpenClaw. Based on real download statistics.</p>
      <div class="stats-bar">
        <div class="stat-item"><div class="stat-value">12.7K+</div><div class="stat-label">Total Skills</div></div>
        <div class="stat-item"><div class="stat-value">13.1M+</div><div class="stat-label">Downloads</div></div>
        <div class="stat-item"><div class="stat-value">22.2K+</div><div class="stat-label">Stars</div></div>
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
  <div class="terminal-hint">Install: <span>clawdhub install &lt;skill-name&gt;</span></div>
  <footer><p><a href="https://opendown.ai/docs" target="_blank">Documentation</a> | Contact: <a href="mailto:support@opendown.ai">support@opendown.ai</a></p></footer>
</body>
</html>`;

const DOCS_URL = "opendown.mintlify.dev";
const CUSTOM_URL = "opendown.ai";

const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="#0a0a0f" width="100" height="100" rx="20"/><circle cx="50" cy="40" r="12" fill="#00f5ff"/><circle cx="35" cy="55" r="6" fill="#00f5ff"/><circle cx="65" cy="55" r="6" fill="#00f5ff"/><rect x="30" y="70" width="40" height="4" rx="2" fill="#8b5cf6"/><rect x="38" y="78" width="24" height="4" rx="2" fill="#8b5cf6"/></svg>`;

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const urlObject = new URL(request.url);

  if (urlObject.pathname === "/favicon.ico") {
    return new Response(FAVICON_SVG, { 
      headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" } 
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
    return new Response(INDEX_HTML, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  return new Response("Not Found", { status: 404 });
}
