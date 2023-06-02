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
        await page.waitForTimeout(3500);
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
      
                     
        
        });


        const Allowed = {
            Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
            Lowers: "qwertyuiopasdfghjklzxcvbnm",
            Numbers: "1234567890",
            Symbols: "!@#$%^&*"
        }
        
        const getRandomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length))
        const generatePassword = (length = 8) => { // password will be @Param-length, default to 8, and have at least one upper, one lower, one number and one symbol
            let pwd = "";
            pwd += getRandomCharFromString(Allowed.Uppers); //pwd will have at least one upper
            pwd += getRandomCharFromString(Allowed.Lowers); //pwd will have at least one lower
            pwd += getRandomCharFromString(Allowed.Numbers); //pwd will have at least one number
            pwd += getRandomCharFromString(Allowed.Symbols);//pwd will have at least one symbolo
            for (let i = pwd.length; i < length; i++)
                pwd += getRandomCharFromString(Object.values(Allowed).join('')); //fill the rest of the pwd with random characters
            return pwd
        }

        //       
 console.log("Password is : "+gandampassword)


        await page.type('#firstName',gandamtext)
        await page.type('#lastName',gandamtext)
        await page.type('#email',gandamtext+'@'+gandamtext+'.com')
        await page.type('#password',gandampassword)
        await page.type('#password2',gandampassword)
        await page.click("div.accountNew__newsletterCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop") ;
        await page.click("div.accountNew__agbCheckbox > div > div > span.checkbox__checkbox.checkbox__checkbox--alignTop") ;
        await page.click("#register-submit") ;
        
     //   await page.close()

    })

})