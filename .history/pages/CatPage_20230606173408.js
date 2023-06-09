
const elements ={
    regcatigories:'div.ccm-content-slider div li a',
 
 }

export default class CatPage {
    async selectRandamCat(){
  // Wait for any additional content to be loaded
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  
          // Select all the elements you want to choose from
  const e = await page.$$(elements.selectRandamCat);
  
  // Get a random element from the list
  const randomElement = e[Math.floor(Math.random() * 30)];
  con
  // Click on the random element
  await randomElement.click();
    }


}