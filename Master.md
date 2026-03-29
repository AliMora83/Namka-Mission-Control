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


---

## 🤖 AI Reviews & Artifacts

> This section is the shared context layer for all AI agents.
> Before starting work on any project, agents should read the relevant entries here.
> Review consensus states: `Unreviewed` → `Agent Reviewed` → `Cross-Checked` → `Ratified`
> Once **Ratified**, treat decisions as locked truth — do not second-guess architecture.

---

### 2026-03-28 — Mission Control Architecture Review (Comet / Perplexity)

**Status:** `Cross-Checked` — pending Gemini/Claude verification
**Reviewed by:** Comet (Perplexity)
**Scope:** Namka Mission Control dashboard design, multi-agent workflow protocol

#### Key Decisions & Recommendations

1. **Portfolio axes per project** — Every project must expose: Type, Status, Health (RAG), Next Checkpoint (date), Ownership (Agent only / Agent+Ali / Ali only).
2. **"Review & Approve" as first-class lane** — Aggregate all cross-project items blocked on Ali into one lane, sorted by due date and revenue impact. Inline actions: Approve / Request changes / Snooze.
3. **Portfolio Agent (Chief of Staff)** — One orchestrator agent monitors all projects and surfaces a daily digest: "3 projects can advance with just your approval." Tracks promises and pushes them to the approval lane when prerequisites are met.
4. **One overview page + drill-down drawer** — Top: 4–6 KPIs (active projects, waiting approvals, overdue, agents idle/busy). Middle: portfolio grid grouped by Health + Type. Bottom: Today's Log. Click = right-side drawer with goal, tasks, agent runs, next approval.
5. **Capacity guardrails** — Max 3 Priority + 5 Background projects active at once. Mission Control asks which to pause if limit is exceeded. Portfolio Agent suggests demotion candidates by impact.
6. **Live cockpit mode** — Dashboard stays open all day, not just morning check-in. Auto-refresh with soft pulse on unseen changes. Manual/auto toggle.

#### Multi-Agent Context Protocol (MACP)

- **Purpose:** Prevent hallucinations caused by agents filling knowledge gaps with guesses.
- **Flow:** Agent A reviews → saves to Master.md → Agent B reads Agent A's review before reviewing → conflicts surface as explicit disagreements → Ali ratifies → Master.md updated.
**GitHub Master.md URL:** Direct source of truth. All agents read this URL before starting work: `https://github.com/AliMora83/Namka-Mission-Control/blob/main/Master.md` — zero lag, always up-to-date.
- **Review consensus field:** Per project in Mission Control: `Unreviewed` → `Agent Reviewed` → `Cross-Checked` → `Ratified`.
- **Once `Ratified`:** Agents treat spec as locked — no re-architecture without Ali's explicit approval.

#### Architecture (Plan B: GitHub as Live Source)

- **GitHub Master.md** = Live source of truth. Agents read the file URL directly before starting work (no caching, no sync delay).
- **Mission Control** = Live execution cockpit (what's running, what needs Ali's approval).
- **NotebookLM** (optional) = Deep analysis and cross-project synthesis layer. Syncs in background, not time-critical.
- **Workflow:** Agent produces output → Commit to Master.md → Next agent reads it immediately.
- **Briefing protocol:** "Before starting [project], read Master.md and check the AI Reviews & Artifacts section for existing decisions."

---

### 2026-03-28 — Mission Control Dashboard Implementation (Claude / Anthropic)

**Status:** `Agent Reviewed` — pending Comet cross-check
**Reviewed by:** Claude (Anthropic)
**Scope:** Switch Mission Control dashboard data source from Google Sheets to GitHub Master.md

#### Critical Architectural Decision

The current dashboard reads from Google Sheets via `gviz/tq` — which is **fragile, slow, and keeps breaking**. The sheet should only be a UI for editing. **The dashboard should read from GitHub Master.md directly.**

#### Implementation Steps

1. **Fix status** (Quick fixes in Master.md):
   - Row 2 (Odoo POS): Change STATUS from "On Hold" → `Active`
   - Row 3 (Bridging Africa): Change STATUS to `Active`
   - Delete Row 9 (duplicate)

2. **Add new columns** to all project entries in Master.md:
   - `EFFORT`: S/M/L/XL per project (estimated complexity)
   - `BLOCKER`: Extract from "Needs Ali's input" notes → standardized blocker field
   - `LAST_COMMIT`: Pull from GitHub API or manually add last commit date
   - `PROGRESS`: For Odoo POS only, add `45` (percent complete)

3. **Create `fetchProjectsFromMaster()` function** in Apps Script (`lib/fetchProjects.ts`):
```typescript
const MASTER_MD_URL = 
  'https://raw.githubusercontent.com/AliMora83/Namka-Mission-Control/main/Master.md'

export async function fetchProjectsFromMaster(): Promise<ProjectCard[]> {
  const res = await fetch(MASTER_MD_URL)
  const text = await res.text()
  return parseMasterMd(text) // parse markdown → ProjectCard[] interface
}
```

4. **Build `parseMasterMd(text)` parser**:
   - Reads `##` project sections
   - Extracts bullet fields: `Status`, `Stack`, `Next Step`, `AI Model`, `Blocker`, `Effort`, `Last Commit`, `Progress`
   - Maps to `ProjectCard` interface
   - Since Master.md is committed on every update, **always fresh — no sheet sync issues**

#### Benefits

- **Zero lag**: Master.md is the live source agents already read
- **No column mapping issues**: Parser reads markdown structure directly
- **No gviz wrapper to strip**: Direct fetch from GitHub raw URL
- **Version controlled**: Every dashboard change is a Git commit
- **Agents write directly**: Qwen/Claude/Gemini can commit project updates to Master.md

#### Next Step

Qwen (build agent) implements `fetchProjectsFromMaster()` + `parseMasterMd()` and wires it into the dashboard frontend. Estimated effort: **~1 hour**.

---

> 

---

## 📋 Review Entry
**Date**: 2025-01-25  
**Agent**: Comet  
**Status**: Cross-Checked  
**Project**: Gemini Mission Control Dashboard  
**Topic**: Code Refactoring Analysis

### Analysis
Reviewed the core dashboard codebase to identify refactoring opportunities for improved efficiency:

**Current Architecture:**
- Frontend: Next.js 15 with App Router
- Database: Firestore (Firebase)
- UI Components: shadcn/ui with Tailwind CSS
- Data Flow: Client-side Firestore queries

**Key Findings:**
1. **Data Source Dependency**: Dashboard is tightly coupled to Firestore, but Master.md on GitHub is the actual source of truth
2. **Double Entry Problem**: Project updates require editing both Master.md and Firestore data
3. **Sync Lag**: Changes to Master.md don't immediately reflect in dashboard
4. **Architecture Mismatch**: Using a database for what is essentially a markdown-driven workflow

### Recommendations

**Phase 1: GitHub as Primary Data Source** (Immediate)
- Replace Firestore queries with GitHub API calls to fetch Master.md directly
- Parse markdown structure to extract project cards
- Benefits: Single source of truth, version control, agent collaboration enabled
- Implementation: ~2 hours

**Phase 2: Component Optimization** (Short-term)
- Extract ProjectCard to separate component file
- Create reusable StatusBadge component
- Implement proper TypeScript interfaces for type safety
- Add loading states and error boundaries

**Phase 3: Real-time Updates** (Medium-term)  
- Implement GitHub webhooks for instant updates
- Add WebSocket connection for live dashboard refresh
- Cache parsed markdown data with SWR or React Query

**Phase 4: Advanced Features** (Long-term)
- Agent activity feed showing recent reviews
- Consensus visualization for MACP workflow
- Interactive markdown editing directly from dashboard
- Multi-project dashboard using Template-Master.md pattern

### Next Action
> ⚡ **Qwen to implement Phase 1**: Refactor data fetching from Firestore to GitHub Master.md parsing

---🔁 **Next:** Comet to cross-check and mark as `Ratified`, or Qwen to implement directly if approved.
