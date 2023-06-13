
export default class Base {

  async wait(time) {
    await page.waitForTimeout(time); //wait

  }
  async scrollup(time) {
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
  }
}