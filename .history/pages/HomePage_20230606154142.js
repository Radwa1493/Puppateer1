import BasePage from './BasePage'

    const elements ={
        Cookies_Buttom:'div.consentForm__acceptButton:nth-child(2) > button',
        Profile_Buttom:  '.headerElement__icon--login' ,
        loginstatus_Flag:  '.headerElement__status--login' ,
        Homelinks :'.htmlTile center a:nth-of-type(10)'
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
      const links = 
      puppteer list of element click on second 1

    }

}
