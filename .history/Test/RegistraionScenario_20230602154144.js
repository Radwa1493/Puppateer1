const puppeteer = require('puppeteer');

describe('Registraion Scenario ', () => {

    it('Launch Browser', async function() {
        const Browser = await puppeteer.launch ({headless:false})
        const page = await Browser.newPage()
        await page.goto('')
    })

})