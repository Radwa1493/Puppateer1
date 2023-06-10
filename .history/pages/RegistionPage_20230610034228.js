import BasePage from './BasePage'
import {  Gender, TextGenerator ,PasswordGenerator, } from '../config'

let PasswprdGen
let textGen
let emailGen
// Registration Page Locators
const elements ={
    registration_Buttom:'button#registerAccount',
    Gender_DropDown:'#salutation', 
    FristName:'#firstName',
    LastName:'#lastName',
    Email:'#email',
    Passwprd:'#password',
    Password2:'#password2',
    Checkbox1:'div.accountNew__newsletterCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop',
    Checkbox2:'div.accountNew__agbCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop',
    submit:'#register-submit',
 }

export default class RegistionPage extends BasePage {
    //Fun wait till Gender field displayed
    async isRegisterPageDisplayed(){
        await page.waitForSelector(elements.Gender_DropDown)    
    }
    //fun open registration page
    async openRegisterPage(){
        await page.waitForSelector(elements.registration_Buttom)    
//      await page.goto(' https://www.moebel-kraft.de/registrierung') // open registration through the url
        await page.click(elements.registration_Buttom)  //open registration by click on registration buttion - sometimes not working
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