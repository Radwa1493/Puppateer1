const puppeteer = require('puppeteer');

describe('Registraion Scenario ', () => {

    it('Launch Browser', async function() {
    
        const browser = await puppeteer.launch({headless:false, args: ['--start-maximized'] }) // open browser in maxmize window
        const page = await browser.newPage(); // open new tab
        await page.setViewport({ width: 1266, height: 768}); // set screen size
        await page.goto('https://www.moebel-kraft.de/'); // navigate to url 
        
        await page.click("div.consentForm__acceptButton:nth-child(2) > button") ;
        await page.click(".headerElement__icon--login") ;
        await page.click("button#registerAccount") ;
        await page.select()
        
     //   await page.close()

    })

})