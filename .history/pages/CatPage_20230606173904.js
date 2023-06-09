
const elements ={
    regcatigories:'div.ccm-content-slider div li a',
 
 }

export default class CatPage {
    async selectRandamCat(){

          // Select all the elements you want to choose from
  const e = await page.$$(elements.selectRandamCat);
  
  // Get a random element from the list
  const rand = 
  const randomElement = e[];
  console.log(randomElement)
  // Click on the random element
  await randomElement.click();
    }


}