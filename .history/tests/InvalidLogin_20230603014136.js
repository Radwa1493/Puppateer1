const puppeteer = require('puppeteer');
const expect = require('chai').expect

//const Str = require('@supercharge/strings')

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
        await page.type('#loginEmail','ccjss@ccjss.com')
        expect(title).to.be.a('','zMöbelhaus Kraft - Möbel und Dekorationen für ein schöneres Zuhause');


    })

})
//ccjss 