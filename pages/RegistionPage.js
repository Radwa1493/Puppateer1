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

export default class RegistionPage {
    //Fun wait till Gender field displayed
    async isRegisterPageDisplayed(){
        await page.waitForSelector(elements.Gender_DropDown)    
    }
    //fun fill registration fields
    async enterNewUserData(){
        PasswprdGen = PasswordGenerator() // get rand password and save it in variable PasswprdGen
        textGen = TextGenerator() // get rand text and save it in variable textGen
        emailGen = textGen+'@'+textGen+'.com' // save email in variable emailGen
        await page.waitForSelector(elements.Gender_DropDown) //wait till registration form loaded   
        await page.select(elements.Gender_DropDown, Gender); // set gender from the config.js
        console.log('Frist Name : '+ textGen) // display fristname
        await page.type(elements.FristName,textGen)  // set fristname
        console.log('Last Name : '+ textGen) // display fristname
        await page.type(elements.LastName,textGen)  // set lastname
        console.log('Email : '+ emailGen) // display email
        await page.type(elements.Email,textGen+'@'+textGen+'.com')// set email
        console.log('Password : '+ PasswprdGen ) //display password
        await page.type(elements.Passwprd,PasswprdGen) //set password
        console.log('Password2 : '+ PasswprdGen) //display password2
        await page.type(elements.Password2,PasswprdGen) //set password2
        await page.click(elements.Checkbox1) ; //check checkbox1
        await page.click(elements.Checkbox2) ; //check checkbox2
        await page.click(elements.submit) ; // submit the form
        await page.waitForNavigation({ waitUntil: 'networkidle0' });// wait till full page loaded
    }

    // get mail used in registration 
    getmail(){ return emailGen   } 
    // get password used in registration 
    getpassword(){ return PasswprdGen   } 

}