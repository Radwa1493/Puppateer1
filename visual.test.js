const puppeteer = require('puppeteer');
const {toMatchImageSnapshot} = require ('jest-image-snapshot')
expect.extend({toMatchImageSnapshot})


describe('Registraion Scenario ', () => {
    let browser
    let page
        beforeAll(async function() {
            browser = await puppeteer.launch({
                headless:false,
                args: ['--start-maximized'], // open browser in maxmize window
                devtools:false
             }) 
             const Incognito = await browser.createIncognitoBrowserContext()
            page = await Incognito.newPage(); // open new tab
    
        })

        test('Tc', async function() {
            await page.setViewport({ width: 1266, height: 768}); // set screen size
            await page.goto('https://www.moebel-kraft.de/'); // navigate to url 



           
            
           // take full snapshot from website
            const image = await page.screenshot()
            expect(image).toMatchImageSnapshot({
                failureThresholdType:'pixel',
                failureThreshold:500 


            })
        
                        
        await page.click("div.consentForm__acceptButton:nth-child(2) > button") ;
        await page.click(".headerElement__icon--login") ;

    
       const login = await page.waitForSelector('#loginEmail') // wait for css displayed

        // take  snapshot for element
        const image1 = await login.screenshot()
            expect(image1).toMatchImageSnapshot({
            failureThresholdType:'percent',
            failureThreshold:2 
                        })
        })

    })