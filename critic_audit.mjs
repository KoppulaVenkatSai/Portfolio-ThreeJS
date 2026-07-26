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

  console.log('Navigating to http://localhost:5173/Tests/Scene1RoomPOC/index.html...');
  await page.goto('http://localhost:5173/Tests/Scene1RoomPOC/index.html');

  await page.waitForTimeout(3500);
  const screenshot1 = path.resolve(videoDir, '01_initial_view.png');
  await page.screenshot({ path: screenshot1 });
  console.log(`Saved screenshot: ${screenshot1}`);

  // Open settings
  const settingsBtn = page.locator('#settings-toggle-btn');
  if (await settingsBtn.isVisible()) {
    await settingsBtn.click();
    await page.waitForTimeout(500);
    
    // Enable free cam
    const freeCamBtn = page.locator('#toggle-orbit-btn');
    if (await freeCamBtn.isVisible()) {
      await freeCamBtn.click();
      await page.waitForTimeout(500);

      // Mouse orbit drag
      const canvas = page.locator('#webgl-canvas');
      const box = await canvas.boundingBox();
      if (box) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + box.width / 2 + 180, box.y + box.height / 2 - 60, { steps: 25 });
        await page.mouse.up();
        await page.waitForTimeout(1000);
      }
      const screenshot2 = path.resolve(videoDir, '02_freecam_orbit.png');
      await page.screenshot({ path: screenshot2 });
      console.log(`Saved screenshot: ${screenshot2}`);
    }
  }

  // Trigger Blast Off transition via exposed function
  console.log('Triggering Blast Off transition...');
  await page.evaluate(() => {
    window.isTransitioning = false;
    if (typeof window.triggerBlastOff === 'function') {
      window.triggerBlastOff();
    }
  });

  await page.waitForTimeout(10000);
  const screenshot3 = path.resolve(videoDir, '03_blastoff_exterior.png');
  await page.screenshot({ path: screenshot3 });
  console.log(`Saved screenshot: ${screenshot3}`);

  await page.close();
  await context.close();
  await browser.close();

  console.log('[CRITIC AUDIT] Audit script completed successfully!');
}

audit().catch(err => {
  console.error('[CRITIC AUDIT FAILED]:', err);
  process.exit(1);
});
