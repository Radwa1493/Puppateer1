import HomePage from '../pages/HomePage'
import ProfilePage from '../pages/ProfilePage'
import RegistionPage from '../pages/RegistionPage';
import CatPage from '../pages/CatPage';
import BasePage from '../pages/BasePage';

import {  Url, timeout,InValidPassword,ProfilePageTitle } from '../config'

let homePage 
let profilePage 
let registionPage
let catPage
let basePage
beforeAll(async () => {
	jest.setTimeout(timeout);		// increase time out
	await page.setViewport({ width: 1266, height: 768}); // set screen size
	// Create objects for page classed 
	homePage  = new HomePage()
    profilePage  = new ProfilePage()
    registionPage  = new RegistionPage()
	catPage = new CatPage()
	basePage = new BasePage()

    await page.goto(Url) //Navigate to URL mentioned in config.js
    await homePage.isHomePageDisplayed() //wait till cookies displayed
    await homePage.CloseCookies() //close cookies
	})

// Test suite for user Registration	
describe('Registration Test', () => {
  // Test case for Open Profile Page
	it('Open Profile Page', async () => {
		await homePage.OpenProfile()    //open profile page
		await profilePage.isLoginPageDisplayed() //check used logedin
		expect(basePage.getTitle()).to.include(ProfilePageTitle);
	})
  // Test case for Open Registration Page
	it('Open Registration Page', async () => {
		await profilePage.openRegisterPage() //open Registration page
		await registionPage.isRegisterPageDisplayed() //check Registration page opened
		})
  // Test case fill Registration Page and create new user
	it('Fill New user data',  async function ()   {
		await registionPage.enterNewUserData() // fill new user data
		await homePage.isloginstatusDisplayed() //check new user loged
	 //  await homePage.OpenProfile()
	});

 // Test case to logout
	it('Logout', async function ()   {
        await profilePage.Logout() //logout
        });
	});
// Test suite for Login	
describe('Login Test', () => {
	// Test case for Invalid login
	it('Enter Invalid credincials', async function ()   {
		console.log('email :' +registionPage.getmail())
		console.log('Password : '+InValidPassword)
		await profilePage.EnterCredinial(registionPage.getmail(),InValidPassword)
		});
	
	it('An error displayed', async function ()   {
		await profilePage.isInvalidloginError()
	});			
					})

/*
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


			*/