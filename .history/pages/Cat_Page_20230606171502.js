import BasePage from './BasePage '

const elements ={
    regcatigories:'div.ccm-content-slider div li a',
 
 }

export default class RegistionPage extends BasePage {
    async selectRandamCat(){

          // Select all the elements you want to choose from
  const e = await page.$$(elements.selectRandamCat);
  
  // Get a random element from the list
  const randomElement = e[Math.floor(Math.random() * elements.length)];
  
  // Click on the random element
  await randomElement.click();
    }


}