const puppeteer = require('puppeteer');

describe('Registraion Scenario ', () => {

    it('Launch Browser', async function() {
    
        const browser = await puppeteer.launch({headless:false,devtools:true})
        const page = await browser.newPage();
        await page.goto('https://www.moebel-kraft.de/');

        await page.click("") ;


        #responsive > div.consentForm__container > div > div > div.consentForm__acceptButtons > div:nth-child(2) > button
    })

})