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
    await page.goto('http://localhost:5174/Tests/EarthLandingPOCV3/index.html');
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

    // 3. Snap back / Earth silhouette phase screenshot (at 15.0 seconds)
    await page.waitForTimeout(9000);
    await page.screenshot({ path: path.join(__dirname, 'phase_snapback.png') });
    console.log("Captured snapback silhouette phase screenshot.");

    // 3b. Earth grow / light sweep phase screenshot (at 19.0 seconds)
    await page.waitForTimeout(4000);
    await page.screenshot({ path: path.join(__dirname, 'phase_reentry.png') }); // Using phase_reentry or new name, let's keep phase_reentry to avoid breaking references
    console.log("Captured Earth grow sunrise sweep phase screenshot.");

    // 4. Earth illumination phase screenshot (at 25.0 seconds)
    await page.waitForTimeout(6000);
    await page.screenshot({ path: path.join(__dirname, 'phase_illumination.png') });
    console.log("Captured Earth illumination phase screenshot.");

    // Wait until pause point (30.8s) has been reached, then resume the timeline
    await page.waitForTimeout(6000); // reaches 31.0s total elapsed time (after 30.8s pause)
    console.log("Resuming cinematic timeline past the pause point...");
    await page.evaluate(() => {
      if (window.cinematicTimeline) {
        window.cinematicTimeline.resume();
      } else {
        console.error("cinematicTimeline not found on window object!");
      }
    });

    // 5. Reentry friction burn phase screenshot (at 33.0 seconds total elapsed time, 2.0s after resume)
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(__dirname, 'phase_reentry_burn.png') });
    console.log("Captured reentry burn phase screenshot.");

    // 6. Storm phase screenshot (at 35.0 seconds total elapsed time, 4.0s after resume)
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(__dirname, 'phase_storm.png') });
    console.log("Captured storm phase screenshot.");

    // 7. Landing phase screenshot (at 41.0 seconds total elapsed time, 12.0s after resume)
    await page.waitForTimeout(6000);
    await page.screenshot({ path: path.join(__dirname, 'phase_landing.png') });
    console.log("Captured landing phase screenshot.");

    // 8. Manual control phase screenshot (at 50.0 seconds total elapsed time, 21.0s after resume)
    await page.waitForTimeout(9000);
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
