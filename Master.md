# 🧭 Namka Dev – Master Project Overview
> Last updated: 2026-03-28 | Owner: Ali Mora | Location: Johannesburg, ZA

---

## 🎯 Mission
Build and ship a portfolio of AI-assisted SaaS products across edtech, events,
3D manufacturing, and developer tooling — leveraging free-tier APIs and
AI coding assistants (Gemini, Claude, Qwen) for maximum velocity.

---

## 🗂 Active Projects

### 🔴 Priority 1 – Ship Now

#### 1. Odoo POS Terminal
- **Repo:** https://github.com/AliMora83/Odoo-POS-Terminal
- **Stack:** Python / Odoo
- **Status:** Active | Last commit: 2026-03-28
- **Next Step:** Build POS terminal UI components and link to Odoo backend session
- **AI Model:** Qwen (AI can proceed autonomously)
- **Notes:** Highest priority — committed today

#### 2. Bridging Africa API
- **Repo:** https://github.com/AliMora83/Odoo-BA-API
- **Stack:** Python / Odoo
- **Status:** Active | Last commit: 2026-03-24
- **Next Step:** Finalize service request sync + add error handling + write tests
- **AI Model:** Qwen (AI can proceed autonomously)
- **Notes:** Core revenue project

#### 3. EventSaas
- **Repo:** https://github.com/AliMora83/EventSaas
- **Stack:** TypeScript / React
- **Status:** Active | Last commit: 2026-03-06
- **Next Step:** Build ticketing module + payment integration + organiser dashboard
- **AI Model:** Claude
- **Blocker:** Needs payment gateway decision from Ali
- **Notes:** Core product — needs your direction before AI proceeds

---

### 🟡 Priority 2 – Active Development

#### 4. Kora Tutor
- **Repo:** https://github.com/AliMora83/Kora-Tutor
- **Stack:** TypeScript / Next.js
- **Status:** Active | Last commit: 2026-03-23
- **Next Step:** Define AI tutor session flow + integrate LLM API + build lesson UI
- **AI Model:** Claude (AI can proceed autonomously)
- **Blocker:** Needs product spec decision from Ali

#### 5. SmartPress (3D)
- **Repo:** https://github.com/AliMora83/SmartPress
- **Stack:** TypeScript
- **Status:** Active | Last commit: 2026-03-03
- **Next Step:** Build order management + print queue UI + material tracker
- **AI Model:** Claude (AI can proceed autonomously)
- **Notes:** 3D print management SaaS

#### 6. OpenMindi AI Studio
- **Repo:** https://github.com/AliMora83/openmindi-ai-studio
- **Stack:** JavaScript
- **Status:** Active | Last commit: 2026-02-27
- **Next Step:** Add model switcher UI + prompt history + export feature
- **AI Model:** Gemini (AI can proceed autonomously)
- **Notes:** openmindi.co.za platform

#### 7. Atlas Website
- **Repo:** https://github.com/AliMora83/Atlas-Website
- **Stack:** TypeScript
- **Status:** Active | Last commit: 2026-02-21
- **Next Step:** Integrate Odoo backend + build conference agenda UI + speaker pages
- **AI Model:** Claude
- **Blocker:** Odoo integration spec needed
- **Notes:** Atlas Conference platform

#### 8. Namka Mission Control
- **Repo:** https://github.com/AliMora83/Namka-Mission-Control
- **Stack:** TypeScript
- **Status:** Active | Last commit: 2026-02-19
- **Next Step:** Build AI task dispatch system + agent status board + live log feed
- **AI Model:** Claude (AI can proceed autonomously)

#### 9. Khula Landing
- **Repo:** https://github.com/AliMora83/khula-landing
- **Stack:** TypeScript / React
- **Status:** Active | Last commit: 2025-11-07
- **Next Step:** Connect Firebase auth + add pricing section + deploy on Vercel
- **AI Model:** Claude (AI can proceed autonomously)
- **Notes:** Landing page for Khula Learning

#### 10. Khula Learning
- **Repo:** https://github.com/AliMora83/khula-learning
- **Stack:** JavaScript / Firebase
- **Status:** Active | Last commit: 2025-11-04
- **Next Step:** Build lesson player + progress tracking + age 3-9 content pipeline
- **AI Model:** Gemini
- **Blocker:** Content pipeline needs Ali's input
- **Notes:** e-learning platform for kids aged 3–9

---

### 🟠 Priority 3 – Needs Review / Decision

#### 11. Mission Control Dash
- **Repo:** https://github.com/AliMora83/mission-control-dashboard
- **Stack:** TypeScript
- **Status:** Active | Last commit: 2026-02-16
- **Next Step:** Sync with Namka-Mission-Control + add real-time WebSocket feed
- **AI Model:** Claude (AI can proceed autonomously)
- **Notes:** OpenClaw private dashboard

#### 12. Mining Data
- **Repo:** https://github.com/AliMora83/Mining-Data
- **Stack:** Shell
- **Status:** Needs Review | Last commit: 2026-03-09
- **Next Step:** Document scripts + add cron automation + output logging
- **AI Model:** Gemini (AI can proceed autonomously)
- **Notes:** Review scope before AI proceeds

#### 13. Event Serve
- **Repo:** https://github.com/AliMora83/event-serve
- **Stack:** JavaScript / React
- **Status:** Needs Review | Last commit: 2026-02-10
- **Next Step:** Audit vs EventSaas — decide if merging or keeping as separate product
- **AI Model:** Gemini
- **Blocker:** Product decision needed — legacy vs new EventSaas

---

### 🔵 Priority 4–5 – Low Priority / Done

#### 14. URL Shortener (amil)
- **Repo:** https://github.com/AliMora83/amil-short
- **Stack:** HTML / JS
- **Next Step:** Add analytics dashboard + custom slug support
- **AI Model:** Gemini (AI can proceed autonomously)

#### 15. Nk AI Portfolio
- **Repo:** https://github.com/AliMora83/Nk-AI-Portfolio
- **Stack:** TypeScript
- **Status:** Needs Review | Next Step:** Polish UI + add case studies + deploy
- **AI Model:** Gemini (AI can proceed autonomously)
- **Notes:** Client portfolio project

#### 16. QR Code Generator
- **Repo:** https://github.com/AliMora83/QR-Code
- **Stack:** JavaScript
- **Status:** Done
- **Next Step:** Consider open-sourcing as npm package
- **AI Model:** Gemini

---

## 🔑 API Keys & Secrets

> Keys are stored securely — NOT in this file.

| Key Name | Service | Where Stored |
|---|---|---|
| `GITHUB_TOKEN` | GitHub API | Apps Script → Script Properties |
| `GEMINI_KEY` | Google AI Studio | Apps Script → Script Properties |
| `CLAUDE_KEY` | Anthropic (Haiku) | Apps Script → Script Properties |
| `OPENROUTER_KEY` | OpenRouter (Qwen/Mistral) | Apps Script → Script Properties |
| `TARGET_EMAIL` | Gmail target | Apps Script → Script Properties |
| `SHEET_ID` | This spreadsheet | Apps Script → Script Properties |

**How to get them:**
- GitHub Token: https://github.com/settings/tokens → New token
- Gemini Key: https://aistudio.google.com/app/apikey
- Claude Key: https://console.anthropic.com → API Keys
- OpenRouter Key: https://openrouter.ai/keys

---

## 🏗 Infrastructure

| Service | Purpose |
|---|---|
| GitHub (AliMora83) | All source code repos |
| Netlify | Frontend deployments (EventSaas, etc.) |
| Vercel | Next.js deployments (Khula Landing) |
| Firebase | Auth + DB for Khula Learning |
| Odoo.sh | Odoo backend (Bridging Africa, POS) |
| Google Apps Script | Dev Mission Control automation |
| Google Sheets | Dev Mission Control dashboard |

---

## 📋 Dev Mission Control
- **Sheet:** https://docs.google.com/spreadsheets/d/1h-Yy9hkVHWr-BbnLiXVcMZ4b8eQm__d4QOCvY8mO3y8
- **Apps Script:** https://script.google.com/u/0/home/projects/1sDVQDD510ZC0UHpfvpIkt4TvbMnNRTNtYzivxuZ8qB2oeud6DvzcV_MO/edit
- **Tabs:** Projects | Cron Schedule | API Keys (registry only)

---

## 🤖 How to Use This File with Gemini

Paste the contents of this file at the start of any Gemini session with:

> "Here is my MASTER.md. Use it to understand my projects, stack, priorities,
> and next steps. Ask me which project we're working on today."

Gemini can then:
- Pull the correct repo URL and stack
- Know the current next step without re-explaining
- Respect blockers (items marked "Needs Ali's input")
- Use the correct AI model preference per project
