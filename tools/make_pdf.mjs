import { chromium } from 'playwright';

const REPO = '/home/user/church-hosted-sites';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${REPO}/guidelines.html`, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
// give web fonts a moment to settle
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: `${REPO}/assets/NPBC_Committee_Guidelines_Reformatted_2026-2027.pdf`,
  format: 'Letter',
  printBackground: true,
  // Zero margins: Chromium leaves margin areas unpainted (white), which showed
  // as a cream box floating on white pages. Margins are now body padding in
  // the print stylesheet, so the cream background fills the whole sheet.
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
});
await browser.close();
console.log('PDF written');
