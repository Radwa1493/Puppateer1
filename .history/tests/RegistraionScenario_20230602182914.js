const puppeteer = require('puppeteer');

describe('Registraion Scenario ', () => {

    it('Launch Browser', async function() {
    
        const browser = await puppeteer.launch({headless:false,devtools:true})
        const page = await browser.newPage();
        await page.goto('https://www.moebel-kraft.de/');
        await page.waitForTimeout(1000)
        await page.click("//button[contains(text(), 'Alle auswählen & bestätigen')]");
    })

})