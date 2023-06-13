
export default class Base {

  async wait(time) {
    await page.waitForTimeout(time); //wait

  }
}