
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