const puppeteer = require('puppeteer');
const Str = require('@supercharge/strings')

describe('Registraion Scenario ', () => {

    it('Launch Browser', async function() {
    
        const browser = await puppeteer.launch({headless:false, args: ['--start-maximized'] }) // open browser in maxmize window
        const page = await browser.newPage(); // open new tab
        await page.setViewport({ width: 1266, height: 768}); // set screen size
        await page.goto('https://www.moebel-kraft.de/'); // navigate to url 

        const title = await page.title() // get title

        console.log("Page title is : "+title)

        await page.click("div.consentForm__acceptButton:nth-child(2) > button") ;
        await page.click(".headerElement__icon--login") ;
        await page.waitForTimeout(2000)

        await page.click("button#registerAccount") ;
        await page.select('#salutation','Frau')

        //Text Generator
        const gandamtext = await page.evaluate(() => {
          var text = "";
            var charset = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 5; i++)
              text += charset.charAt(Math.floor(Math.random() * charset.length));
            return text;     
           
        });


       // Password Generator
       const password = await page.evaluate(() => {
       
       const length = 12; // Set the length of the password
       const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
       const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       const numberChars = '0123456789';
       const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
     
       let password = '';
       
       // Generate at least one of each required character type
       password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
       password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
       password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
       password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
     
       // Fill up the rest of the password with random characters
       for (let i = 4; i < length; i++) {
         const charType = Math.floor(Math.random() * 4); // 0: lowercase, 1: uppercase, 2: number, 3: special
     
         switch (charType) {
           case 0:
             password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
             break;
           case 1:
             password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
             break;
           case 2:
             password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
             break;
           case 3:
             password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
             break;
         }
       }
     
       return password;
    });

    console.log("Password is : "+password)

    ////
        await page.type('#firstName',gandamtext)
        await page.type('#lastName',gandamtext)
        await page.type('#email',gandamtext+'@'+gandamtext+'.com')
        await page.type('#password',password)
        await page.type('#password2',password)
        await page.click("div.accountNew__newsletterCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop") ;
        await page.click("div.accountNew__agbCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop") ;
        await page.click("#register-submit") ;

        await page.waitForSelector('a > span.headerElement__text.headerElement__text--login', {
            visible: true,
          })
          console.log("login is : "+visible)

  //      element = await page.waitForSelector("[sc-ebzWDT igyUpb]");
  //      title = await page.evaluate(element => element.textContent, element);     //   await page.close()

    })

})