import BasePage from './BasePage '

const elements ={
    regcatigories:'div.ccm-content-slider div li a',
 
 }

export default class RegistionPage extends BasePage {
    async selectRandamCat(){
        await page.waitForSelector(elements.Gender_DropDown)    

          // Select all the elements you want to choose from
  const e = await page.$$('button.my-button-class');
  
  // Get a random element from the list
  const randomElement = elements[Math.floor(Math.random() * elements.length)];
  
  // Click on the random element
  await randomElement.click();
    }


}