import BasePage from './BasePage '

const elements ={
    registration_Buttom:'button#registerAccount',
 
 }

export default class RegistionPage extends BasePage {
    async isRegisterPageDisplayed(){
        await page.waitForSelector(elements.Gender_DropDown)    
    }


}