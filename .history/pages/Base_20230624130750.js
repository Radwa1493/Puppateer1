export default class Base {
  async wait(time) {
    await page.waitForTimeout(time); //wait
  }
  async waitloadPage() {
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    }
  async scrollUp() {
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }

  async scrollDown() {
    // Scroll down the page by the height of the viewport
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
  }

  async getText(p, css) {
    const welcomeMessage = await p.$(css);
    return await p.evaluate((element) => element.textContent, welcomeMessage);
  }

  async IfeDisplayed(p, css) {
    const welcomeMessage = await p.$(css);
    return await p.evaluate((element) => element.textContent, welcomeMessage);
  }



}
