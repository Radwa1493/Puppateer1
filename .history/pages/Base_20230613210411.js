
export default class Base {

  async wait(time) {
    await page.waitForTimeout(time); //wait

  }
  async scrollUp() {
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }

}
async scrollDown() {
    // Scroll down the page by the height of the viewport
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });

}