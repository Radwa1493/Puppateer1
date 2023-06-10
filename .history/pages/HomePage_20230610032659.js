import BasePage from './BasePage'

// Home Page Locators
  const elements ={
    Cookies_Buttom:'div.consentForm__acceptButton:nth-child(2) > button',
    Profile_Buttom:  '.headerElement__icon--login' ,
    loginstatus_Flag:  '.headerElement__status--login' ,
    Homelinks :'.htmlTile center a'
    }

  export default class HomePage extends BasePage {
    //Fun wait till cookies displayed
    async isHomePageDisplayed(){
    await page.waitForSelector(elements.Cookies_Buttom) ;
    console.log('Cookies diplayed')
    }

    //Fun close cookies windows
    async CloseCookies(){
    await page.click(elements.Cookies_Buttom) ;
    console.log('Cookies closed')

    }

    async OpenProfile(){
    await page.waitForSelector(elements.Profile_Buttom) ;

        await   page.click(elements.Profile_Buttom) ;
    }

    async isloginstatusDisplayed(){
        await page.waitForSelector(elements.loginstatus_Flag);
        expect(elements.loginstatus_Flag).not.toBeNull(); // assertion


       }
       async Profile(){
       await page.waitForTimeout(5000)
        await page.waitForSelector(elements.Profile_Buttom);

//        await page.click(elements.Profile_Buttom) ; // same step in OpenProfile() but it did not work so I used url as a work around
  ///     await page.goto(TestDate.ProfileUrl); // open profile page 
  // Wait for the page to finish loading
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
    }


    async OpenCat(){ 
//      await page.waitForTimeout(3000)

  // Wait for any additional content to be loaded
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

      // Scroll down the page by the height of the viewport
await page.evaluate(() => {
  window.scrollBy(0, window.innerHeight);
});

      const e = await page.$$(elements.Homelinks);
      await e[9].click();
  // Wait for any additional content to be loaded
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  
    }

}
