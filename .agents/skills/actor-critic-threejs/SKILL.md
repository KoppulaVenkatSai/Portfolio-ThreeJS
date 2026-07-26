---
name: actor-critic-threejs
description: Run an iterative Actor-Critic evaluation loop for Three.js/WebGL scenes to visually inspect, critique, and incrementally refine lighting, framing, depth rendering, geometry glitching, and shaders using Playwright visual snapshots and code audits.
---

# Actor-Critic Three.js Scene Refinement Skill

An iterative multi-agent simulation workflow combining a **Critic** (visual & code auditor) and an **Actor** (WebGL/Three.js developer) to systematically diagnose and polish 3D WebGL web applications.

---

## 🎭 Workflow Roles

### 1. The Critic (Auditor & Verifier)
- **Visual Inspection**: Captures WebGL canvas screenshots and video clips using Playwright to inspect rendering output.
- **Defect Detection**: Identifies and categorizes flaws into:
  - **Depth & Glitching**: Z-fighting, geometry phasing, polygon clipping, shadow acne, WebGL context loss, GPU stalls.
  - **Lighting & Atmosphere**: Contrast imbalance, harsh shadows, unlit pockets, missing ambient bounce light, bloom blowout.
  - **Views & Framing**: Off-center camera angles, awkward FOV cuts, camera transition jitter or control conflicts.
- **Verification**: Evaluates every Actor code update against visual evidence before allowing the next iteration step.

### 2. The Actor (WebGL Developer)
- **Code Execution**: Makes targeted, incremental fixes to `main.js`, shaders, materials, camera setup, and post-processing passes.
- **Best-Practice Fix Patterns**:
  - **Depth Precision & Z-Fighting**: Enable `logarithmicDepthBuffer: true` on `THREE.WebGLRenderer`, tune `near`/`far` clip planes (avoid > 1000:1 ratios), and set `depthTest`/`depthWrite`/`polygonOffset` on layered meshes.
  - **Shadow Map Polish**: Set `shadow.bias = -0.0001`, `shadow.normalBias = 0.02`, and define tight orthographic shadow camera bounds on directional lights.
  - **Smooth Camera Animations**: Sync `camera.lookAt` and `controls.target` during GSAP camera position timelines, disabling `OrbitControls` while transitions play.
  - **Canvas Text & Overlay Rendering**: Lock canvas typography scale, handle `document.fonts.ready` re-renders gracefully, and render overlay planes with explicit `renderOrder`.

---

## 🔄 Iterative Loop Process

Execute each iteration sequentially without skipping steps:

```
[START]
  │
  ├─► STEP 1: Critic Audit
  │     └─ Run Playwright script -> Capture initial state screenshot & logs
  │     └─ Analyze depth errors, lighting flaws, and framing issues
  │
  ├─► STEP 2: Actor Code Edits
  │     └─ Implement targeted WebGL fixes (depth, shadows, lights, camera)
  │
  ├─► STEP 3: Critic Re-Verification
  │     └─ Re-run Playwright audit -> Compare new screenshots against baseline
  │     └─ Confirm fix resolution or document remaining refinements
  │
  └─► STEP 4: Next Iteration or Complete
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
