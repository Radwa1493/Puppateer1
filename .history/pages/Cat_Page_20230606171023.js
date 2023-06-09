import BasePage from './BasePage '

const elements ={
    regcatigories:'div.ccm-content-slider div li a',
 
 }

export default class RegistionPage extends BasePage {
    async isRegisterPageDisplayed(){
        await page.waitForSelector(elements.Gender_DropDown)    
    }


}