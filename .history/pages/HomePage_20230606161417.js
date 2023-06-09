import BasePage from './BasePage'

    const elements ={
        Cookies_Buttom:'div.consentForm__acceptButton:nth-child(2) > button',
        Profile_Buttom:  '.headerElement__icon--login' ,
        loginstatus_Flag:  '.headerElement__status--login' ,
        Homelinks :'.htmlTile center a'
     }
    export default class HomePage extends BasePage {
    
    async isHomePageDisplayed(){
      await page.waitForSelector(elements.Cookies_Buttom) ;
      console.log('cookies diplayed')

       }

      async CloseCookies(){
        await page.click(elements.Cookies_Buttom) ;
    }

 
    async OpenProfile(){
        await   page.waitForSelector(elements.Profile_Buttom) ;

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
      await page.waitForTimeout(9000)

//      await page.waitForSelector(elements.HomePage);




      const e = await page.$$(elements.Homelinks);

       // Scroll the element into view
  await page.evaluate((e) => {
    const element = document.querySelector(selector);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, selector);

      await e[10].click();


    }

}
