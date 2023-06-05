const puppeteer = require('puppeteer');

describe('Registraion Scenario ', () => {

    it('Launch Browser', async function() {
      
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.freecodecamp.org/');
        
        await browser.close();
      
      
        const Browser = await puppeteer.launch ({headless:false})
        const page = await Browser.newPage()
        await page.goto('https://www.moebel-kraft.de/')
    })

})