import {  logoutUrl } from '../config'
// Profile Page Locators
const elements ={
    lgoin_Buttom:'.headerElement__icon--login',
    loginEmail_TxtBox:  '#loginEmail' ,
    loginPass_TxtBox:  '#loginPassword' ,
    submit_TxtBox:  '#login-submit' ,
    error_Txt:  '#loginEmail-error' ,
    registration_Buttom:'button#registerAccount',
    welcome_TXT:'.titleHeadline',
    logout_button:  '.sidebarNavigation__rootChild' 
 }

export default class ProfilePage {
    // fun wait till profile page displayed
    async isLoginPageDisplayed(){
        await page.waitForSelector(elements.loginEmail_TxtBox)     
    }
    //fun enter credinial for login 
    async EnterCredinial(email,password){
   // await page.click(elements.lgoin_Buttom) ;
       await page.$eval(elements.loginEmail_TxtBox, input => input.value = ''); // Clear the text from the field
       await page.type(elements.loginEmail_TxtBox,email) //set email
       await page.$eval(elements.loginEmail_TxtBox, input => input.value = ''); // Clear the text from the field

       await page.type(elements.loginPass_TxtBox,password) // set password
       await page.click(elements.submit_TxtBox) //submit
    }
    // assert that Error message displayed
    async isInvalidloginError(){
        await page.waitForSelector(elements.error_Txt)
        expect(elements.error_Txt).not.toBeNull(); 
    }
    //fun open registration page
    async OpenRegisterPage(){
     await page.click(elements.registration_Buttom)
    }
    //fun open registration page
    async openRegisterPage(){
        await page.waitForSelector(elements.registration_Buttom)    
        await page.goto(' https://www.moebel-kraft.de/registrierung') // open registration through the url
//      await page.click(elements.registration_Buttom)  //open registration by click on registration buttion - sometimes not working
    }    
    //fun for logout
    async Logout(){
/*        
     // Scroll down the page by the height of the viewport
        await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
    })
        await page.click(elements.logout_button)
*/
        await page.goto(logoutUrl); // open logout page      
    }}