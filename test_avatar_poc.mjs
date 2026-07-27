import { chromium } from 'playwright';

(async () => {
  console.log('Launching Playwright Chromium browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const consoleLogs = [];
  page.on('console', msg => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => consoleLogs.push(`[ERROR] ${err.message}`));

  console.log('Navigating to http://localhost:5174/Tests/AvatarPOC/index.html...');
  await page.goto('http://localhost:5174/Tests/AvatarPOC/index.html', { waitUntil: 'networkidle' });

  // Wait for Draco decoding & rendering
  await page.waitForTimeout(3000);

  const screenshotPath = '/Users/venkat/.gemini/antigravity-ide/brain/cda73381-e406-473f-bfcf-888d2957c6ca/avatar_poc_rendered.png';
  await page.screenshot({ path: screenshotPath });
  console.log(`Saved screenshot to: ${screenshotPath}`);

  console.log('--- BROWSER CONSOLE LOGS ---');
  consoleLogs.forEach(log => console.log(log));
  console.log('----------------------------');

  await browser.close();
  console.log('Playwright test completed successfully!');
})();
