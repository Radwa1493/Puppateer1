
export default class Base {

  async wait(time) {
    await page.waitForTimeout(time); //wait

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
    async waitTillLoadPage() {
    // Wait for page to be loaded
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
  }
  async GetText(page,priceElement) {

// Find the element on the page
const element = await page.$(priceElement);

// Get the text content of the element using evaluate()
return await page.evaluate(element => element.textContent, element);

}
}


