const { beforeEach } = require("mocha");

import HomePage from '../Pages/HomePage'
import ProfilePage from '../Pages/ProfilePage';
import RegistionPage from '../pages/RegistionPage';
let homePage 
let profilePage 
let registionPage

describe('Register Test', () => {

	beforeAll(async () => {
        await page.setViewport({ width: 1266, height: 768}); // set screen size

        jest.setTimeout(60000);		// increase time out
        await page.goto('https://www.moebel-kraft.de/')

        homePage  = new HomePage()
        profilePage  = new ProfilePage()
        registionPage  = new RegistionPage()


        await homePage.isHomePageDisplayed()
        await homePage.CloseCookies()

	})

 
	it('Open Profile Page', async () => {

        await homePage.OpenProfile()
       await profilePage.isLoginPageDisplayed()
	})

    it('Open Registration Page', async () => {
       await registionPage.openRegisterPage()
        await registionPage.isRegisterPageDisplayed()
	})

        it('Fill New user data',  async function ()   {
                await registionPage.enterNewUserData()
      //          await homePage.isloginstatusDisplayed()
                await homePage.Profile()

        });
        
        it('Logout', async function ()   {
              
                await profilePage.Logout()
        });


/*
	})

        describe('InvalidLogin Test', () => {

                beforeAll(async () => {
                await page.setViewport({ width: 1266, height: 768}); // set screen size
        
                jest.setTimeout(60000);		// increase time out
                await page.goto('https://www.moebel-kraft.de/')
        
                homePage  = new HomePage()
                profilePage  = new ProfilePage()
                registionPage  = new RegistionPage()
        
                
                await homePage.isHomePageDisplayed()
                await homePage.CloseCookies()
        
                })
        */
                it('Open Profile Page', async function ()   {
                        await homePage.OpenProfile()
                        await profilePage.isLoginPageDisplayed()
                        
                    });
                
                    it('Enter Invalid credincials', async function ()   {
                        console.log(RegistionPage.emailGen)
                        await profilePage.EnterCredinial('jatkt@jatkt.com',TestDate.InValidPassword)
                    });
            
                    it('An error displayed', async function ()   {
                        await profilePage.isInvalidloginError()
            
                    });
            
        
        
                })