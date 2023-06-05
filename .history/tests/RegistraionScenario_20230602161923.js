const puppeteer = require('puppeteer');

describe('Registraion Scenario ', () => {

    it('Launch Browser', async function() {
    
      
      
        const Browser = await puppeteer.launch ({headless:false,devtools:true})
        const page = await Browser.newPage()
        await page.goto('https://www.moebel-kraft.de/')
        await page
    })

})