import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log("Starting Playwright cinematic V3 test...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Print all console logs
  page.on('console', msg => {
    console.log(`[BROWSER CONSOLE] [${msg.type().toUpperCase()}]:`, msg.text());
  });

  // Print all page errors
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.stack || err.message);
  });

  try {
    // 1. Navigate to the local server
    await page.goto('http://localhost:5173/Tests/EarthLandingPOCV3/index.html');
    console.log("Navigated to page. Waiting for assets loader...");

    // Wait for the loader to hide (button becomes enabled)
    const button = page.locator('#ignition-trigger');
    await button.waitFor({ state: 'visible', timeout: 10000 });
    
    // Check if it's disabled
    const isDisabled = await button.isDisabled();
    if (isDisabled) {
      console.log("Button is disabled. Waiting for loading manager to finish...");
      await page.waitForFunction(() => {
        const btn = document.getElementById('ignition-trigger');
        return btn && !btn.disabled;
      }, { timeout: 15000 });
    }
    
    console.log("Initialization completed! Clicking INITIATE DESCENT button...");
    await button.click();

    // 2. Warp phase screenshot (at 6.0 seconds)
    await page.waitForTimeout(6000);
    await page.screenshot({ path: path.join(__dirname, 'phase_warp.png') });
    console.log("Captured warp phase screenshot.");

    // 3. Snap back phase screenshot (at 10.8 seconds)
    await page.waitForTimeout(4800);
    await page.screenshot({ path: path.join(__dirname, 'phase_snapback.png') });
    console.log("Captured snapback phase screenshot.");

    // 4. Reentry phase screenshot (at 13.5 seconds)
    await page.waitForTimeout(2700);
    await page.screenshot({ path: path.join(__dirname, 'phase_reentry.png') });
    console.log("Captured reentry phase screenshot.");

    // 5. Storm phase screenshot (at 18.0 seconds)
    await page.waitForTimeout(4500);
    await page.screenshot({ path: path.join(__dirname, 'phase_storm.png') });
    console.log("Captured storm phase screenshot.");

    // 6. Landing phase screenshot (at 25.0 seconds)
    await page.waitForTimeout(7000);
    await page.screenshot({ path: path.join(__dirname, 'phase_landing.png') });
    console.log("Captured landing phase screenshot.");

    // 7. Manual control phase screenshot (at 31.0 seconds)
    await page.waitForTimeout(6000);
    await page.screenshot({ path: path.join(__dirname, 'phase_manual.png') });
    console.log("Captured manual phase screenshot.");

    // Test dragging the mouse on canvas to rotate OrbitControls
    console.log("Testing manual drag controls...");
    const canvas = page.locator('#webgl-canvas');
    const box = await canvas.boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + box.width / 2 - 200, box.y + box.height / 2 - 100, { steps: 20 });
      await page.mouse.up();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(__dirname, 'phase_manual_dragged.png') });
      console.log("Captured dragged manual phase screenshot.");
    }

    console.log("Cinematic sequence complete!");
  } catch (error) {
    console.error("Test execution failed:", error);
  } finally {
    await browser.close();
    console.log("Browser closed.");
  }
})();
