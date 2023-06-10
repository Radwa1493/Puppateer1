import BasePage from './BasePage'
import {  logoutUrl } from '../config'

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

export default class ProfilePage extends BasePage {

    async isLoginPageDisplayed(){
        await page.waitForSelector(elements.loginEmail_TxtBox)     
    }

    async EnterCredinial(email,password){
   // await page.click(elements.lgoin_Buttom) ;
       await page.$eval(elements.loginEmail_TxtBox, input => input.value = ''); // Clear the text from the field
       await page.type(elements.loginEmail_TxtBox,email)
       await page.type(elements.loginPass_TxtBox,password)
       await page.click(elements.submit_TxtBox)
    }
    async isInvalidloginError(){
        await page.waitForSelector(elements.error_Txt)
        expect(elements.error_Txt).not.toBeNull();

    }
    
    async OpenRegisterPage(){
     await page.click(elements.registration_Buttom)

    }
//fun for logout
    async Logout(){
            // Scroll down the page by the height of the viewport
await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
        await page.click(elements.logout_button)

  //      await page.goto(logoutUrl); // open logout page      

    }}