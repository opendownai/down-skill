const INDEX_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OpenDown — We are on the verge of the Singularity.</title>
  <meta name="description" content="Curated top AI Agent skills for OpenClaw/ClawHub – ranked by real downloads & stars. Install instantly with npx clawhub@latest. 13K+ skills, 243K+ stars.">
  <meta name="keywords" content="OpenClaw, ClawHub, AI Agent, Skills, Plugins, Extensions, Downloads, Stars, LLM, Claude, GPT, AI Agents">
  
  <meta property="og:title" content="OpenDown – ClawHub Top AI Agent Skills">
  <meta property="og:description" content="Discover the most popular AI agent skills with 13K+ indexed, 243K+ stars. Install instantly with npx clawhub@latest.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://opendown.ai">
  <meta property="og:image" content="https://cdn.opendown.ai/opendown-ai-2.png">
  <meta property="og:image:width" content="512">
  <meta property="og:image:height" content="512">
  <meta property="og:image:alt" content="OpenDown - ClawHub Top Skills">
  <meta property="og:site_name" content="OpenDown">
  <meta property="og:locale" content="en_US">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="OpenDown – ClawHub Top AI Agent Skills">
  <meta name="twitter:description" content="Curated leaderboard of top ClawHub skills – 13K+ indexed, 243K+ stars. Install with npx clawhub@latest">
  <meta name="twitter:image" content="https://cdn.opendown.ai/opendown-ai-2.png">
  <meta name="twitter:site" content="@opendownai">
  <meta name="twitter:creator" content="@opendownai">
  
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#0a0a0a">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="OpenDown">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Rajdhani:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #0a0a0a;
      --bg-secondary: #0d0d0d;
      --bg-card: #111111;
      --accent-indigo: #6366f1;
      --accent-indigo-dim: #4f46e5;
      --accent-indigo-glow: #6366f1;
      --text-primary: #e0e0e0;
      --text-secondary: #808080;
      --glow-indigo: 0 0 30px rgba(99, 102, 241, 0.4);
      --border-color: rgba(99, 102, 241, 0.2);
    }

    :root[data-theme="dark"] {
      --bg-primary: #0a0a0a;
      --bg-secondary: #0d0d0d;
      --bg-card: #111111;
      --accent-indigo: #6366f1;
      --accent-indigo-dim: #4f46e5;
      --accent-indigo-glow: #6366f1;
      --text-primary: #e0e0e0;
      --text-secondary: #808080;
      --glow-indigo: 0 0 30px rgba(99, 102, 241, 0.4);
      --border-color: rgba(99, 102, 241, 0.2);
    }

    :root[data-theme="light"] {
      --bg-primary: #f5f5f7;
      --bg-secondary: #ffffff;
      --bg-card: #ffffff;
      --accent-indigo: #6366f1;
      --accent-indigo-dim: #4f46e5;
      --accent-indigo-glow: none;
      --text-primary: #1d1d1f;
      --text-secondary: #6e6e73;
      --glow-indigo: none;
      --border-color: rgba(0, 0, 0, 0.1);
    }

    :root[data-theme="light"] .skill-card {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    :root[data-theme="light"] .skill-card:hover {
      border-color: rgba(99, 102, 241, 0.3);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    :root[data-theme="light"] .skills-grid {
      background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.02) 100%);
    }

    :root[data-theme="light"] .search-box {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }

    :root[data-theme="light"] .search-box input {
      border: none;
      background: transparent;
    }

    :root[data-theme="light"] .search-box input:focus {
      box-shadow: none;
    }

    :root[data-theme="light"] .search-box:focus-within {
      border-color: var(--accent-indigo);
      box-shadow: 0 4px 16px rgba(99, 102, 241, 0.15);
    }

    :root[data-theme="light"] .category-btn {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: var(--text-secondary);
    }

    :root[data-theme="light"] .category-btn.active,
    :root[data-theme="light"] .category-btn:hover {
      background: var(--accent-indigo);
      border-color: var(--accent-indigo);
      color: #ffffff;
    }

    :root[data-theme="light"] .stats-bar {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.08);
    }

    :root[data-theme="light"] .badge {
      background: rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    :root[data-theme="light"] .badge {
      background: rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    :root[data-theme="light"] .skill-rank {
      background: #ffffff;
      border: 2px solid #6366f1;
      color: #6366f1;
      box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);
    }

    :root[data-theme="light"] .skill-card:nth-child(1) .skill-rank {
      border-color: #eab308;
      color: #eab308;
    }

    :root[data-theme="light"] .skill-card:nth-child(2) .skill-rank {
      border-color: #9ca3af;
      color: #6b7280;
    }

    :root[data-theme="light"] .skill-card:nth-child(3) .skill-rank {
      border-color: #d97706;
      color: #d97706;
    }

    :root[data-theme="light"] .skill-icon {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(79, 70, 229, 0.1));
      border: 1px solid rgba(0, 0, 0, 0.06);
    }

    :root[data-theme="light"] .bg-grid {
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
    }

    @media (prefers-color-scheme: light) {
      :root:not([data-theme="dark"]) {
        --bg-primary: #ffffff;
        --bg-secondary: #f8f9fa;
        --bg-card: #ffffff;
        --accent-indigo: #6366f1;
        --accent-indigo-dim: #4f46e5;
        --accent-indigo-glow: none;
        --text-primary: #111827;
        --text-secondary: #6b7280;
        --glow-indigo: none;
        --border-color: rgba(0, 0, 0, 0.1);
      }
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
      transition: background 0.3s, color 0.3s;
    }

    .bg-grid {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
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
      background: var(--accent-indigo);
      animation: float 8s ease-in-out infinite;
    }

    .bg-glow-2 {
      bottom: -200px;
      left: -200px;
      background: var(--accent-indigo-dim);
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



    .logo {
      display: block;
      margin: 0 auto 20px;
      height: 56px;
      opacity: 0.9;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .logo:hover {
      opacity: 1;
      transform: scale(1.05);
    }

    .header-top {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }

      .theme-switch {
        display: none;
      }

    .theme-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 8px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .main-nav {
      position: sticky;
      top: 0;
      background: var(--bg-primary);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-color);
      z-index: 1000;
      padding: 12px 0;
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .nav-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }
    
    .nav-logo-img {
      height: 32px;
      width: auto;
      border-radius: 8px;
    }
    
    .nav-logo-text {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 600;
      font-size: 20px;
      background: linear-gradient(135deg, var(--accent-indigo), #4f46e5);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    
    .nav-links {
      display: flex;
      gap: 24px;
    }
    
    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
      position: relative;
    }
    
    .nav-link:hover {
      color: var(--accent-indigo);
    }
    
    .nav-link.active {
      color: var(--accent-indigo);
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--accent-indigo);
      transform: scaleX(0);
      transition: transform 0.2s ease;
    }
    
    .nav-link:hover::after,
    .nav-link.active::after {
      transform: scaleX(1);
    }
    
    .nav-theme-toggle {
      display: flex;
      align-items: center;
    }
    
    @media (max-width: 768px) {
      .nav-container {
        padding: 0 16px;
      }
      
      .nav-links {
        display: none;
      }
      
      .nav-logo-img {
        height: 28px;
      }
      
      .nav-logo-text {
        font-size: 18px;
      }
    }

    .theme-btn:hover {
      background: rgba(128, 128, 128, 0.1);
      color: var(--text-primary);
    }

    .theme-btn svg {
      width: 20px;
      height: 20px;
    }

    .theme-btn .icon-moon {
      display: block;
    }

    @media (max-width: 768px) {
      .theme-switch {
        top: 16px;
        right: 16px;
      }
    }

    h1 {
      font-family: 'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 700;
      font-size: clamp(40px, 8vw, 72px);
      line-height: 1.1;
      background: linear-gradient(135deg, var(--accent-indigo), #4f46e5);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-bottom: 12px;
      letter-spacing: -0.02em;
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
      color: var(--accent-indigo);
      font-family: 'JetBrains Mono', monospace;
    }

    .stat-label {
      font-size: 14px;
      color: var(--text-secondary);
      margin-top: 4px;
    }

    .header-actions {
      display: flex;
      gap: 16px;
      margin-top: 32px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .primary-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 14px 28px;
      background: linear-gradient(135deg, var(--accent-indigo), #4f46e5);
      border: 2px solid var(--accent-indigo);
      border-radius: 14px;
      color: white;
      font-size: 15px;
      font-family: inherit;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    }

    .primary-btn:hover {
      background: linear-gradient(135deg, #4f46e5, #4338ca);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
    }

    .secondary-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: rgba(99, 102, 241, 0.1);
      border: 1px solid rgba(99, 102, 241, 0.3);
      border-radius: 12px;
      color: var(--accent-indigo);
      font-size: 14px;
      font-family: inherit;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .secondary-btn:hover {
      background: rgba(99, 102, 241, 0.2);
      border-color: var(--accent-indigo);
    }

    .suggest-btn:hover {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(79, 70, 229, 0.25));
      border-color: var(--accent-indigo);
      box-shadow: var(--glow-indigo);
      transform: translateY(-2px);
    }

    .suggest-btn svg {
      width: 18px;
      height: 18px;
      color: var(--accent-indigo);
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
      border-color: var(--accent-indigo);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
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
      border: 1px solid var(--border-color);
      border-radius: 100px;
      color: var(--text-secondary);
      font-size: 14px;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.2s;
    }

    .category-btn:hover {
      border-color: var(--accent-indigo);
      color: var(--text-primary);
    }

    .category-btn.active {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(79, 70, 229, 0.2));
      border-color: var(--accent-indigo);
      color: var(--accent-indigo);
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

    .bottom-loader {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      gap: 16px;
      color: var(--text-secondary);
      font-size: 14px;
    }

    .bottom-loader.hidden {
      display: none;
    }

    .feather-loader {
      animation: featherFloat 2s ease-in-out infinite;
    }

    .feather-loader .feather {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: featherDraw 3s ease-in-out infinite;
    }

    .feather-loader .ring {
      stroke: var(--accent-indigo);
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation: ringPulse 1.5s ease-in-out infinite;
      transform-origin: center;
    }

    @keyframes featherFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    @keyframes featherDraw {
      0% { stroke-dashoffset: 1000; }
      50% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: -1000; }
    }

    @keyframes ringPulse {
      0%, 100% { 
        stroke-opacity: 0.3;
        transform: scale(1);
      }
      50% { 
        stroke-opacity: 1;
        transform: scale(1.1);
      }
    }
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.2), rgba(139, 92, 246, 0.2));
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
    }

.no-results {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-secondary);
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
  width: 100%;
  margin: 0 auto;
}

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }

    .skill-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 20px;
      padding: 28px;
      position: relative;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: inherit;
    }
    
    .skill-card:hover {
      color: inherit;
    }

    .skill-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--accent-indigo), var(--accent-indigo-dim));
      opacity: 0;
      transition: opacity 0.3s;
    }

    .skill-card:hover {
      transform: translateY(-8px);
      border-color: rgba(99, 102, 241, 0.3);
      box-shadow: var(--glow-indigo);
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
      background: #1a1a1a;
      border: 2px solid var(--accent-indigo);
      border-radius: 10px;
      font-weight: 700;
      font-size: 14px;
      font-family: 'JetBrains Mono', monospace;
      color: var(--accent-indigo);
    }

    .skill-card:nth-child(1) .skill-rank {
      border-color: #ffd700;
      color: #ffd700;
    }

    .skill-card:nth-child(2) .skill-rank {
      border-color: #c0c0c0;
      color: #c0c0c0;
    }

    .skill-card:nth-child(3) .skill-rank {
      border-color: #cd7f32;
      color: #cd7f32;
    }

    .skill-icon {
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(79, 70, 229, 0.1));
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
      color: var(--accent-indigo);
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
      margin-top: auto;
      padding-top: 20px;
      border-top: 1px solid var(--border-color);
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
      color: var(--accent-indigo);
    }

    .meta-item.stars {
      color: #fbbf24;
    }

    .category-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(79, 70, 229, 0.1));
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      color: var(--accent-indigo);
      margin-bottom: 16px;
      transition: all 0.2s ease;
    }
    
    .category-tag:hover {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(79, 70, 229, 0.2));
      border-color: var(--accent-indigo);
      transform: translateY(-1px);
    }
    
    .category-tag::before {
      content: '';
      width: 6px;
      height: 6px;
      background: var(--accent-indigo);
      border-radius: 50%;
      opacity: 0.8;
    }

    .terminal-hint {
      position: relative;
      margin: 40px auto 60px;
      padding: 12px 24px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: var(--text-secondary);
      max-width: 600px;
      text-align: center;
      transition: all 0.3s ease;
    }
    
    .terminal-hint:hover {
      border-color: var(--accent-indigo);
      background: rgba(99, 102, 241, 0.05);
    }

    :root[data-theme="light"] .terminal-hint {
      background: var(--bg-card);
      border-color: var(--border-color);
    }
    
    :root[data-theme="light"] .terminal-hint:hover {
      border-color: var(--accent-indigo);
      background: rgba(99, 102, 241, 0.1);
    }

    :root:not([data-theme]) .terminal-hint {
      background: var(--bg-card);
      border-color: var(--border-color);
    }

    .terminal-hint span {
      color: var(--accent-indigo);
    }

    .terminal-hint .copy-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      padding: 0;
      margin-left: 12px;
      background: rgba(99, 102, 241, 0.15);
      border: 1px solid rgba(99, 102, 241, 0.3);
      border-radius: 8px;
      color: var(--accent-indigo);
      cursor: pointer;
      transition: all 0.2s ease;
    }

    :root[data-theme="light"] .terminal-hint .copy-btn {
      background: rgba(0, 0, 0, 0.05);
      border-color: rgba(0, 0, 0, 0.1);
    }

    .terminal-hint .copy-btn:hover {
      background: rgba(99, 102, 241, 0.2);
      border-color: var(--accent-indigo);
    }

    .terminal-hint .copy-btn.copied {
      background: rgba(34, 197, 94, 0.2);
      border-color: #22c55e;
      color: #22c55e;
    }

    .terminal-hint .copy-btn svg {
      width: 16px;
      height: 16px;
    }

    footer {
      text-align: center;
      padding: 40px 24px 80px;
      color: var(--text-secondary);
      font-size: 14px;
    }

    .footer-main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 24px;
    }

    .footer-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 24px;
      margin-bottom: 20px;
      padding: 0 24px;
    }

    .footer-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
      position: relative;
      padding: 6px 12px;
      border-radius: 8px;
    }

    .footer-links a:hover {
      color: var(--accent-indigo);
      background: rgba(99, 102, 241, 0.1);
    }

    .footer-copyright {
      text-align: center;
      color: var(--text-secondary);
      font-size: 13px;
      opacity: 0.8;
      margin: 0;
      padding: 0 24px;
    }

    footer a {
      color: var(--accent-indigo);
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

    <nav class="main-nav">
      <div class="nav-container">
        <div class="nav-logo">
          <img src="https://cdn.opendown.ai/opendown-ai-2.png" alt="OpenDown" class="nav-logo-img">
          <span class="nav-logo-text">OpenDown</span>
        </div>
        <div class="nav-links">
          <a href="/" class="nav-link active">Home</a>
          <a href="https://claw.opendown.ai/" class="nav-link">OpenClaw Deploy</a>
          <a href="https://github.com/opendownai" target="_blank" class="nav-link">GitHub</a>
          <a href="https://discord.gg/gjGb5WEz" target="_blank" class="nav-link">Discord</a>
        </div>
        <div class="nav-theme-toggle">
          <button class="theme-btn" id="themeToggleNav" title="Toggle theme">
            <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
        </div>
      </div>
    </nav>

    <div class="container">
      <header>
      <div class="header-top">
        <img class="logo" src="https://cdn.opendown.ai/opendown-ai-2.png" alt="OpenDown">
      </div>

      
      <h1>OpenDown</h1>
      <p class="tagline">"We are on the verge of the Singularity" — Vernor Vinge</p>
      <p class="subtitle">ClawHub Top Skills — Curated collection of the most popular AI Agent skills to supercharge your OpenClaw. Based on real download statistics.</p>
      
      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-value">13,566+</div>
          <div class="stat-label">Total Skills</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">13.1M+</div>
          <div class="stat-label">Downloads</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">222.0K+</div>
          <div class="stat-label">Stars</div>
        </div>
      </div>
      
      <div class="header-actions">
        <a href="https://claw.opendown.ai/" target="_blank" class="primary-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          OpenClaw Deploy
        </a>
        <a href="https://discord.gg/gjGb5WEz" target="_blank" class="secondary-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 11l3 3L22 4"/>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
          </svg>
          Suggest a Skill
        </a>
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
        <span class="skill-rank">#13</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/nano-banana-pro" target="_blank">Nano Banana Pro</a>
        </h2>
        <p class="skill-desc">Generate/edit images with Nano Banana Pro (Gemini 3 Pro Image). Use for image create/modify requests incl. edits. Supports text-to-image + image-to-image; 1K/2K/4K; use --input-image.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            1.0K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            1.5K
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#14</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/api-gateway" target="_blank">API Gateway</a>
        </h2>
        <p class="skill-desc">Connect to 100+ APIs (Google Workspace, Microsoft 365, Notion, Slack, Airtable, HubSpot, etc.) with managed OAuth. Use this skill when users want to interact...</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            31.3K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            1.5K
          </span>
          <span class="meta-item">by @byungkyu</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#15</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/obsidian" target="_blank">Obsidian</a>
        </h2>
        <p class="skill-desc">Work with Obsidian vaults (plain Markdown notes) and automate via obsidian-cli.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            31.1K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            1.3K
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#16</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/humanizer" target="_blank">Humanizer</a>
        </h2>
        <p class="skill-desc">Remove signs of AI-generated writing from text. Use when editing or reviewing
text to make it sound more natural and human-written. Based on Wikipedia's
comprehensive "Signs of AI writing" guide. Dete</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            28.9K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            2.6K
          </span>
          <span class="meta-item">by @biostartechnology</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#17</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/openai-whisper" target="_blank">Openai Whisper</a>
        </h2>
        <p class="skill-desc">Local speech-to-text with the Whisper CLI (no API key).</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            28.6K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            1.5K
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#18</span>
        <div class="skill-icon">🔧</div>
        <span class="category-tag">Developer Tools</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/mcporter" target="_blank">Mcporter</a>
        </h2>
        <p class="skill-desc">OfficialUse the mcporter CLI to list, configure, auth, and call MCP servers/tools directly (HTTP or stdio), including ad-hoc servers, config edits, and CLI/type generation.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            26.5K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            781
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#19</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/free-ride---unlimited-free-ai" target="_blank">Free Ride - Unlimited free AI</a>
        </h2>
        <p class="skill-desc">Manages free AI models from OpenRouter for OpenClaw. Automatically ranks models by quality, configures fallbacks for rate-limit handling, and updates opencla...</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            26.2K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            1.9K
          </span>
          <span class="meta-item">by @Shaivpidadi</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#20</span>
        <div class="skill-icon">📊</div>
        <span class="category-tag">Data</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/brave-search" target="_blank">Brave Search</a>
        </h2>
        <p class="skill-desc">Web search and content extraction via Brave Search API. Use for searching documentation, facts, or any web content. Lightweight, no browser required.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            25.2K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            1.1K
          </span>
          <span class="meta-item">by @steipete</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#21</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/humanize-ai-text" target="_blank">Humanize AI text</a>
        </h2>
        <p class="skill-desc">Humanize AI-generated text to bypass detection. This humanizer rewrites ChatGPT, Claude, and GPT content to sound natural and pass AI detectors like GPTZero,...</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            24.6K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            1.0K
          </span>
          <span class="meta-item">by @moltbro</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#22</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/auto-updater-skill" target="_blank">Auto-Updater Skill</a>
        </h2>
        <p class="skill-desc">macOSLinuxAutomatically update Clawdbot and all installed skills once daily. Runs via cron, checks for updates, applies them, and messages the user with a summary of what changed.</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            24.2K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            1.8K
          </span>
          <span class="meta-item">by @maximeprades</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#23</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/byterover" target="_blank">ByteRover</a>
        </h2>
        <p class="skill-desc">You MUST use this for gathering contexts before any work. This is a Knowledge management for AI agents. Use \`brv\` to store and retrieve project patterns, dec...</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            23.4K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            723
          </span>
          <span class="meta-item">by @byteroverinc</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#24</span>
        <div class="skill-icon">🧠</div>
        <span class="category-tag">AI/ML</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/skill-creator" target="_blank">Skill Creator</a>
        </h2>
        <p class="skill-desc">Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Claude's capabilities with specialized knowledge, workfl</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            22.1K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            861
          </span>
          <span class="meta-item">by @chindden</span>
        </div>
      </article>
      <article class="skill-card">
        <span class="skill-rank">#25</span>
        <div class="skill-icon">📊</div>
        <span class="category-tag">Data</span>
        <h2 class="skill-name">
          <a href="https://clawhub.ai/skills/clawdbot-documentation-expert" target="_blank">Clawdbot Documentation Expert</a>
        </h2>
        <p class="skill-desc">Clawdbot documentation expert with decision tree navigation, search scripts, doc fetching, version tracking, and config snippets for all Clawdbot features</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            21.6K
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            2.2K
          </span>
          <span class="meta-item">by @NicholasSpisak</span>
        </div>
      </article>
    </div>
  </div>

  <div class="terminal-hint">
    Install: <span id="install-cmd">npx clawhub@latest install &lt;skill-name&gt;</span>
    <button class="copy-btn" onclick="copyInstallCmd()" title="Copy to clipboard">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
    </button>
    <script>function copyInstallCmd(){const t="npx clawhub@latest install ";navigator.clipboard.writeText(t).then(()=>{const e=document.querySelector('.copy-btn');e.classList.add('copied');e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';setTimeout(()=>{e.classList.remove('copied');e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';},2000)})}</script>
  </div>

    <footer>
      <div class="footer-main">
        <div class="footer-links">
          <a href="https://github.com/opendownai" target="_blank">GitHub</a>
          <a href="https://discord.gg/gjGb5WEz" target="_blank">Discord</a>
          <a href="https://opendown.ai/docs" target="_blank">Docs</a>
          <a href="https://claw.opendown.ai/" target="_blank">OpenClaw Deploy</a>
          <a href="https://www.buymeacoffee.com/opendown" target="_blank">Buy Me a Coffee</a>
          <a href="mailto:support@opendown.ai">Contact</a>
        </div>
        <p class="footer-copyright">
          © 2026 OpenDown. All rights reserved.
        </p>
      </div>
    </footer>
  <script>
    // Theme switcher with proper DOM ready handling
    document.addEventListener('DOMContentLoaded', function() {
      const toggle = document.getElementById('themeToggleNav');
      if (!toggle) return;
      
      const iconSun = toggle.querySelector('.icon-sun');
      const iconMoon = toggle.querySelector('.icon-moon');
      
      function setTheme(theme) {
        localStorage.setItem('theme', theme);
        if (theme === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
          if (iconSun) iconSun.style.display = 'block';
          if (iconMoon) iconMoon.style.display = 'none';
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
          if (iconSun) iconSun.style.display = 'none';
          if (iconMoon) iconMoon.style.display = 'block';
        }
      }
      
      if (toggle) {
        toggle.addEventListener('click', () => {
          const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
          setTheme(currentTheme === 'light' ? 'dark' : 'light');
        });
      }
      
      const savedTheme = localStorage.getItem('theme') || 'dark';
      setTheme(savedTheme);
    });

    const skillsGrid = document.getElementById('skillsGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    let allSkills = [];
    
    function formatNumber(num) {
      if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
      if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
      return num.toString();
    }
    
    const icons = {
      'AI/ML': '🧠',
      'Developer Tools': '🔧',
      'Productivity': '⚡',
      'Data': '📊',
      'Automation': '🤖',
      'Search': '🔍',
      'default': '📦'
    };
    
    function createSkillCard(skill, rank) {
      const icon = icons[skill.category] || icons.default;
      const card = document.createElement('a');
      card.className = 'skill-card';
      card.href = \`https://clawhub.ai/skills/\${skill.slug}\`;
      card.target = '_blank';
      card.dataset.category = skill.category || 'Utility';
      card.innerHTML = \`
        <span class="skill-rank">#\${rank}</span>
        <div class="skill-icon">\${icon}</div>
        <span class="category-tag">\${skill.category || 'Utility'}</span>
        <h2 class="skill-name">\${skill.name}</h2>
        <p class="skill-desc">\${skill.desc || skill.description || ''}</p>
        <div class="skill-meta">
          <span class="meta-item downloads">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>\${formatNumber(skill.downloads || 0)}
          </span>
          <span class="meta-item stars">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>\${formatNumber(skill.stars || 0)}
          </span>
          <span class="meta-item">by @\${skill.author || 'unknown'}</span>
        </div>
      \`;
      return card;
    }
    
    function init() {
      // Initialize with existing HTML skill cards
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
      
      // Initial filter to ensure proper display
      filterSkills();
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
    
    // Bottom loader scroll handler - real pagination
    (function() {
      const bottomLoader = document.getElementById('bottom-loader');
      const skillsGrid = document.querySelector('.skills-grid');
      let isLoading = false;
      let offset = 41; // Start after initial 41 skills
      let hasMore = true;
      const LIMIT = 20;
      
      window.addEventListener('scroll', async () => {
        if (isLoading || !hasMore) return;
        
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;
        
        // Load more when within 300px of bottom
        if (scrollY + windowHeight >= documentHeight - 300) {
          isLoading = true;
          bottomLoader.classList.remove('hidden');
          
          try {
            const response = await fetch(\`/api/skills/more?offset=\${offset}&limit=\${LIMIT}\`);
            const data = await response.json();
            
            if (data.skills && data.skills.length > 0) {
              // Add new skills to grid
              data.skills.forEach(skill => {
                const card = createSkillCard(skill, offset + 1);
                skillsGrid.appendChild(card);
              });
              
              offset += data.skills.length;
              hasMore = data.hasMore !== false;
            } else {
              hasMore = false;
            }
          } catch (error) {
            console.error('Failed to load more skills:', error);
          }
          
          bottomLoader.classList.add('hidden');
          isLoading = false;
        }
      });
    })();
    
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
      // Get all skills ordered by rank, then slice by offset/limit
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/skills?order=rank.asc&offset=${offset}&limit=${limit}`,
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

  if (urlObject.pathname === "/install.sh") {
    return fetch("https://cdn.opendown.ai/install.sh");
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
