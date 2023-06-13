
export default class Base {

  async wait(time) {
    await page.waitForTimeout(time); //wait

  }
  async scrollup() {
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }

}
async scrollup() {
    // Scroll down the page by the height of the viewport
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });

}