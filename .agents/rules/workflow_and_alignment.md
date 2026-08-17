# Workflow, Alignment & Debugging Rules

These rules are mandatory for all Three.js and general coding tasks in this repository.

---

## 1. The 3-Turn Circuit Breaker (Anti-Stuck Protocol)
* If any visual bug, camera movement, animation tweak, or feature remains unresolved after **3 turns**, STOP making incremental guesses.
* **Immediate Action**:
  1. Halt speculative code changes.
  2. Step back and analyze the complete system/scene state from first principles.
  3. Provide an interactive visual tool, debug HUD, or clear ASCII/diagram representation of what is happening.
  4. Initiate a focused alignment check to completely lock down the issue in that single turn—no wasted turns or endless trial-and-error.

---

## 2. Proactive Debugging & Smart Clarifying Questions
* Never guess underspecified requirements, camera angles, or spatial behavior.
* Ask sharp, precise clarifying and debug questions early rather than assuming intent and writing incorrect code.
* If a bug occurs, formulate specific hypotheses and verify them against the code rather than giving generic answers.

---

## 3. Simplicity First ("How Can We Make This Simpler?")
* Always evaluate the simplest, cleanest architectural solution first.
* Avoid over-engineering complex coordinate matrix conversions, multi-layered Bezier curves, or nested quaternions when a simpler approach (e.g., clean camera parenting, locked world up-vectors, simple GSAP timeline interpolation) achieves the exact same visual result reliably.

---

## 4. Time-Saving & Autonomous Self-Testing
* **Save User Time**: Minimize back-and-forth by testing math, build validity (`npx vite build`), and multi-phase transform handoffs autonomously before declaring a step done.
* **Provide Debug Tools Early**: For 3D camera angles, lighting, or spatial positioning, expose interactive on-screen calibration tools (OrbitControls, live coordinate loggers, HUD controls) immediately rather than asking the user to manually test guessed coordinates across 20 turns.
* **Zero Regression Checks**: When updating one phase of a timeline or scene transition, explicitly verify that previous and subsequent phases (e.g., initial button click, mid-flight framing, end reveal) remain unbroken.

---

## 5. Mental Model Synchronization (Empathy for User Vision)
* Deeply understand the user's visual metaphors (e.g., "walking towards a building and tilting neck up") and translate that directly into the mathematical implementation.
* Do not apply mathematical transforms that violate the user's intuitive mental model (e.g., introducing a barrel roll when the user expects a neck pitch).

---

## 6. Strict Alignment on `/grill-me`
* When the user requests `/grill-me` or asks to align on complex spatial behavior, **DO NOT write code immediately**.
* Stop and present a clear, structured breakdown of the coordinates, camera constraints, and timeline stages to confirm 100% alignment before modifying any files.

---

## 7. Three.js Camera & Horizon Stability Standards
* `camera.up` must remain anchored to `(0, 1, 0)` by default across all camera interpolations and transitions to prevent disorienting barrel rolls/world spinning, unless an intentional aircraft roll is explicitly requested.
* Ensure all look targets and camera positions are continuous across scene handoffs (no 1-frame snaps or jumping on ignition/state switch).

---

## 8. Clear Human-Readable Communication (No LaTeX)
* Never format explanations, formulas, or coordinates in LaTeX (`$`, `\text{}`, `\frac{}`, etc.).
* Always present information in plain, human-readable text, structured markdown tables, or clean bullet points.
