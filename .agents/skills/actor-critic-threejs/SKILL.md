---
name: actor-critic-threejs
description: Run an iterative Orchestrator-Actor-Critic evaluation loop for Three.js/WebGL scenes to visually inspect, critique, and incrementally refine lighting, framing, depth rendering, geometry glitching, and shaders using Playwright visual snapshots and code audits.
---

# Actor-Critic Three.js Scene Refinement Skill

> [!IMPORTANT]
> **Trigger-Based Execution Rule**: Do NOT run the Playwright Critic audit script (`critic_audit.mjs`) automatically after routine code edits. ONLY run visual snapshot / Critic audits when the user explicitly requests it using phrases such as **"use critic"**, **"critic audit"**, **"run visual audit"**, or similar explicit directives.

An iterative multi-agent simulation workflow combining an **Orchestrator**, an **Actor**, and a **Critic** to systematically build, diagnose, validate, and polish 3D WebGL web applications.

---

## 🎭 Workflow Roles & Sub-Agent Architecture

> [!IMPORTANT]
> **Sub-Agent Delegation Rule**: The Orchestrator MUST delegate work for each iteration to dedicated sub-agents. The Actor task MUST be delegated to an Actor sub-agent (to implement targeted code or plan updates), and the Critic task MUST be delegated to a Critic sub-agent (to inspect, test, and audit).
> 
> **Strict Single-Iteration Rule**: Every iteration (Iteration 1, Iteration 2, ... Iteration N) MUST be executed in its own separate step. NEVER combine, lump, or execute multiple iterations in a single response or turn.

### 1. The Orchestrator (Sequence & Loop Controller)
- **Sequence Enforcement**: Ensures each iteration step is executed strictly as an isolated, independent task without mutual inclusions or batching across iterations.
- **Sub-Agent Spawning**: Spawns sub-agents for the **Actor** role (to perform changes) and the **Critic** role (to audit and verify).
- **Loop Management**: Verifies that work is executed sequentially in a loop (one iteration at a time) rather than all at once in a single pass.
- **Handshake Protocol**: Directs the **Actor** sub-agent to execute targeted code changes for the current iteration, routes the output to the **Critic** sub-agent for audit, verifies completion, and authorizes advancement to the next iteration only when validation passes.

### 2. The Actor (WebGL Developer)
- **Code Execution**: Makes targeted, incremental code edits for the current iteration (modifying scene modules, shaders, materials, camera setup, lighting, and state management).
- **Best-Practice Fix Patterns**:
  - **Depth Precision & Z-Fighting**: Enable `logarithmicDepthBuffer: true` on `THREE.WebGLRenderer`, tune `near`/`far` clip planes (avoid > 1000:1 ratios), and set `depthTest`/`depthWrite`/`polygonOffset` on layered meshes.
  - **Shadow Map Polish**: Set `shadow.bias = -0.0001`, `shadow.normalBias = 0.02`, and define tight orthographic shadow camera bounds on directional lights.
  - **Smooth Camera Animations**: Sync `camera.lookAt` and `controls.target` during GSAP camera position timelines, disabling `OrbitControls` while transitions play.
  - **Canvas Text & Overlay Rendering**: Lock canvas typography scale, handle `document.fonts.ready` re-renders gracefully, and render overlay planes with explicit `renderOrder`.

### 3. The Critic (Auditor & Verifier)
- **Code & Visual Inspection**: Audits code quality, depth configuration, lighting balance, camera framing, and (when requested by user) executes Playwright WebGL canvas screenshots and video clips.
- **Defect Detection**: Identifies and categorizes flaws into:
  - **Depth & Glitching**: Z-fighting, geometry phasing, polygon clipping, shadow acne, WebGL context loss, GPU stalls.
  - **Lighting & Atmosphere**: Contrast imbalance, harsh shadows, unlit pockets, missing ambient bounce light, bloom blowout.
  - **Views & Framing**: Off-center camera angles, awkward FOV cuts, camera transition jitter or control conflicts.
- **Verification**: Evaluates every Actor code update against verification criteria before passing approval back to the Orchestrator.

---

## 🔄 Iterative Tri-Agent Loop Process

> [!IMPORTANT]
> **Strict Loop & Isolation Rule**: Do NOT perform or lump multiple iterations together in a single step. Each iteration MUST be executed as a separate sequential task managed by the **Orchestrator**, implemented by the **Actor** sub-agent, and verified by the **Critic** sub-agent before proceeding.

```
[START ITERATION N]
  │
  ├─► STEP 1: Orchestrator Initiation
  │     └─ Verify sequence order and assign isolated task for Iteration N
  │
  ├─► STEP 2: Actor Code Implementation
  │     └─ Implement targeted WebGL changes for Iteration N only
  │
  ├─► STEP 3: Critic Audit & Verification
  │     └─ Audit implementation, verify zero regressions, test iteration
  │
  └─► STEP 4: Orchestrator Gatekeeper Check
        └─ If verified -> Complete Iteration N & Advance to Iteration N+1
        └─ If issues found -> Signal Actor for targeted correction
```

---

## 🛠️ Automated Playwright Audit Template

Create a script `critic_audit.mjs` in the project root to capture WebGL canvas state:

```javascript
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function audit() {
  console.log('[CRITIC AUDIT] Starting Playwright browser inspection...');
  const browser = await chromium.launch({ headless: true });
  
  const videoDir = path.resolve(process.cwd(), 'scratch_audit_videos');
  if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: videoDir, size: { width: 1280, height: 720 } }
  });

  const page = await context.newPage();
  page.on('console', msg => console.log('  [BROWSER CONSOLE]', msg.text()));
  page.on('pageerror', err => console.error('  [BROWSER ERROR]', err));

  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(3000);

  const shot1 = path.resolve(videoDir, '01_initial_view.png');
  await page.screenshot({ path: shot1 });
  console.log(`Saved screenshot: ${shot1}`);

  await page.close();
  await context.close();
  await browser.close();
}

audit().catch(err => {
  console.error('[CRITIC AUDIT FAILED]:', err);
  process.exit(1);
});
```
