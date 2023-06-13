import Base from './Base';

// Home Page Locators
const elements = {
  Cookies_Buttom: 'div.consentForm__acceptButton:nth-child(2) > button',
  Profile_Buttom: '.headerElement__icon--login',
  loginstatus_Flag: '.headerElement__status--login',
  Homelinks: '.htmlTile center a',
};
export default class HomePage extends Base{
  //Fun wait till cookies displayed
  async isHomePageDisplayed() {
    await page.waitForSelector(elements.Cookies_Buttom);
    console.log('Cookies diplayed');
  }
  //Fun close cookies windows
  async CloseCookies() {
    await page.click(elements.Cookies_Buttom);
    console.log('Cookies closed');
  }
  // fun open profile page
  async OpenProfile() {
    await page.waitForSelector(elements.Profile_Buttom);
    await page.click(elements.Profile_Buttom);
  }
  // fun check used logedin
  async isloginstatusDisplayed() {
    await page.waitForSelector(elements.loginstatus_Flag);
    expect(elements.loginstatus_Flag).not.toBeNull(); // assertion
  }
  // fun open Category page
  async OpenCat() {
    // Wait for page to be loaded
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    // Scroll down the page by the height of the viewport
    this.scrollDown();
    // get all links in the age in array and click on cat link
    const e = await page.$$(elements.Homelinks);
    await e[9].click();
    // Wait for page to be loaded
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
  }
}
