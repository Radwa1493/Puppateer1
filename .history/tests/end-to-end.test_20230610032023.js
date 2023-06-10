import HomePage from '../Pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import RegistionPage from '../pages/RegistionPage';
import CatPage from '../pages/CatPage';
import {  Url, timeout,InValidPassword } from '../config'

let homePage 
let profilePage 
let registionPage
let catPage

beforeAll(async () => {
	jest.setTimeout(timeout);		// increase time out
	await page.setViewport({ width: 1266, height: 768}); // set screen size
	// Create objects for page classed
	homePage  = new HomePage()
    profilePage  = new ProfilePage()
    registionPage  = new RegistionPage()
	catPage = new CatPage()

await page.goto(Url)
        await homePage.isHomePageDisplayed()
        await homePage.CloseCookies()
	})

	/*
	describe('Register Test', () => {
 
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
		   //         await homePage.Profile()
	
			});

			
			it('Logout', async function ()   {
                await profilePage.Logout()

        });
		});

        describe('Invalid Login Test', () => {
			it('Enter Invalid credincials', async function ()   {
			console.log('email :' +registionPage.getmail())
			console.log('Password : '+InValidPassword)
			await profilePage.EnterCredinial(registionPage.getmail(),InValidPassword)
						});
	
			it('An error displayed', async function ()   {
			await profilePage.isInvalidloginError()
	
						});			
					})


		describe('valid Login Test', () => {
			it('Enter valid credincials', async function ()   {
	//			await homePage.OpenProfile()

			console.log('email :'+registionPage.getmail())
			console.log('Password'+registionPage.getpassword())
				await profilePage.EnterCredinial(registionPage.getmail(),registionPage.getpassword())
		});		
						
			it('Login status flag displayed',  async function ()   {
				await homePage.isloginstatusDisplayed()								
				});						
				});	
				
	*/			
				describe('Shopping  Test', () => {
			
		it('Open Profile Page', async () => {
			await homePage.OpenProfile()
		   await profilePage.isLoginPageDisplayed()
		})
	
			it('Enter valid credincials', async function ()   {
				await profilePage.EnterCredinial('jyxfv@jyxfv.com','hE3]!z3.N+c[')

		});	
			
		it('Open category  page', async function ()   {
						await homePage.OpenCat()
		});	
		it('Select Randam Categoy', async function ()   {
				await catPage.selectRandamCat()
	    });		
			
	it('Select Randam Item', async function ()   {
		await catPage.selectRandamItem()
            });		
			});		


			