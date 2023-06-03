const puppeteer = require('puppeteer');
const expect = require('chai').expect

//const Str = require('@supercharge/strings')

describe('Registraion Scenario ', () => {
let browser
let page
    before(async function() {
        browser = await puppeteer.launch({
            headless:false,
            args: ['--start-maximized'], // open browser in maxmize window
            devtools:false
         }) 
        page = await browser.newPage(); // open new tab

    })
 /*   after(async function() {
        await browser.close();
    })
    beforeEach(async function() {
    })
    afterEach(async function() {
    })
    */
    it('Launch Browser', async function() {
    
        await page.setViewport({ width: 1266, height: 768}); // set screen size
        await page.goto('https://www.moebel-kraft.de/'); // navigate to url 
        await page.waitForTimeout(12000)

        const title = await page.title() // get title

        console.log("Page title is : "+title)
       // expect(title).to.be.a('Möbelhaus Kraft - Möbel und Dekorationen für ein schöneres Zuhause');

        await page.click("div.consentForm__acceptButton:nth-child(2) > button") ;
        await page.click(".headerElement__icon--login") ;
        await page.waitForTimeout(2000)
        await page.type('#loginEmail','ccjss@ccjss.com')


    })

})
//ccjss 