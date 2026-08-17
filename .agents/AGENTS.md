# Project Rules

## Critic Audit Execution
- Do NOT execute the background Critic Playwright script (`critic_audit.mjs` or `node critic_audit.mjs`) automatically after code edits.
- Only run the Critic visual audit script when the user explicitly requests it (e.g. "use critic", "run critic audit", "check visual state with critic").

## Workflow, Alignment & Debugging Protocols
All sessions must strictly follow the core protocols defined in [.agents/rules/workflow_and_alignment.md](file:///Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/.agents/rules/workflow_and_alignment.md):
1. **3-Turn Circuit Breaker**: If stuck on an issue/bug for >3 turns, STOP, re-assess the entire scenario, provide visualizers/debug tools, and fully resolve it in that turn.
2. **Simplicity First**: Always choose the cleanest, most direct implementation to avoid over-engineered math and bugs.
3. **Proactive Debug Questions**: Ask targeted questions when intent is ambiguous rather than guessing.
4. **Time-Saving & Autonomous Testing**: Give on-screen calibration tools immediately for 3D/visual tuning; test and audit multi-phase handoffs to prevent regressions.
5. **Mental Model Synchronization**: Translate the user's visual metaphors faithfully into code.
6. **Strict `/grill-me` Compliance**: Pause all code writing and lock down alignment first when requested.
7. **Three.js Horizon Invariance**: Keep `camera.up = (0, 1, 0)` stable to prevent unwanted barrel rolls/world spinning.
8. **No LaTeX**: Always use clear, plain human-readable markdown.
