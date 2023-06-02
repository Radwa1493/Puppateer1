const puppeteer = require('puppeteer');
const Str = require('@supercharge/strings')

describe('Registraion Scenario ', () => {

    it('Launch Browser', async function() {
    
        const browser = await puppeteer.launch({headless:false, args: ['--start-maximized'] }) // open browser in maxmize window
        const page = await browser.newPage(); // open new tab
        await page.setViewport({ width: 1266, height: 768}); // set screen size
        await page.goto('https://www.moebel-kraft.de/'); // navigate to url 
        
        await page.click("div.consentForm__acceptButton:nth-child(2) > button") ;
        await page.click(".headerElement__icon--login") ;
        await page.waitForTimeout(5000);
        await page.click("button#registerAccount") ;
        await page.select('#salutation','Frau')

        //console.log( "Text Generator "+firstName )
        const gandamtext = await page.evaluate(() => {
            var text = "";
            var charset = "abcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 5; i++)
              text += charset.charAt(Math.floor(Math.random() * charset.length));
            return text;     
        });

        //console.log( "Text Generator "+firstName )
        const gandampassword = await page.evaluate(() => {
              prompt("Random password:",
              return  randomstring = ((o=20,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$")=>Array.from(crypto.getRandomValues(new Uint32Array(o))).map(o=>n[o%n.length]).join(""))(); 
        });

 //       return    Math.random().toString(36).substring(2,7);

console.log(gandampassword)

        await page.type('#firstName',gandamtext)
        
        await page.type('#lastName',gandamtext)
        await page.type('#email',gandamtext+'@'+gandamtext+'.com')
        await page.type('#password',gandampassword)
        await page.type('#password2',gandampassword)




            
     //   await page.close()

    })

})