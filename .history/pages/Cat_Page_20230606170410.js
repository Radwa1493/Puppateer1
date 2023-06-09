import BasePage from './BasePage'

const elements ={
    registration_Buttom:'button#registerAccount',
 
 }

export default class RegistionPage extends BasePage {
    async isRegisterPageDisplayed(){
        await page.waitForSelector(elements.Gender_DropDown)    
    }

    async openRegisterPage(){
        await page.waitForSelector(elements.registration_Buttom)    
      
        await page.goto(' https://www.moebel-kraft.de/registrierung')
      //  await page.click(elements.registration_Buttom)  // sometimes not click 

    }
    async enterNewUserData(){
        PasswprdGen = PasswordGenerator()
        textGen = TextGenerator()
        emailGen = textGen+'@'+textGen+'.com'
        await page.waitForSelector(elements.Gender_DropDown)    
        await page.select(elements.Gender_DropDown, Gender);
       // await page.select(elements.Gender_DropDown,'Frau')
        console.log('Frist Name : '+ textGen)
        await page.type(elements.FristName,textGen)
        console.log('Last Name : '+ textGen)
        await page.type(elements.LastName,textGen)
        console.log('Email : '+ emailGen)
        await page.type(elements.Email,textGen+'@'+textGen+'.com')
        console.log('Password : '+ PasswprdGen )
        await page.type(elements.Passwprd,PasswprdGen)
        console.log('Password2 : '+ PasswprdGen)
        await page.type(elements.Password2,PasswprdGen)
        await page.click(elements.Checkbox1) ;
        await page.click(elements.Checkbox2) ;
        await page.click(elements.submit) ;
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
    }

    // get mail used in registration 
    getmail(){ return emailGen   } 
    // get password used in registration 
    getpassword(){ return PasswprdGen   } 

}