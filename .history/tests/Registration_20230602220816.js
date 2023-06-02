const puppeteer = require('puppeteer');
const Str = require('@supercharge/strings')

describe('Registraion Scenario ', () => {

    it('Launch Browser', async function() {
    
        const browser = await puppeteer.launch({headless:false, args: ['--start-maximized'] }) // open browser in maxmize window
        const page = await browser.newPage(); // open new tab
        await page.setViewport({ width: 1266, height: 768}); // set screen size
        await page.goto('https://www.moebel-kraft.de/'); // navigate to url 
        const title = page.title() // get title
        console.log(title)

        await page.click("div.consentForm__acceptButton:nth-child(2) > button") ;
        await page.click(".headerElement__icon--login") ;
        await page.waitForTimeout(3500);
        await page.click("button#registerAccount") ;
        await page.select('#salutation','Frau')

        const gandamtext = await page.evaluate(() => {
            return    Math.random().toString(36).substring(2,10);
           /* var text = "";
            var charset = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 5; i++)
              text += charset.charAt(Math.floor(Math.random() * charset.length));
            return text;     
            */
        });

        //console.log( "Text Generator "+firstName )
        const gandampassword = await page.evaluate(() => {
              return  randomstring = ((o=20,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$")=>Array.from(crypto.getRandomValues(new Uint32Array(o))).map(o=>n[o%n.length]).join(""))(); 
        });

 //       


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