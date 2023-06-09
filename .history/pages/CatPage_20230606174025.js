
const elements ={
    regcatigories:'div.ccm-content-slider div li a',
 
 }

export default class CatPage {
    async selectRandamCat(){

          // Select all the elements you want to choose from
  const el = await page.$$(elements.selectRandamCat);
  
  // Get a random element from the list
  const rand = Math.floor(Math.random() * 31);
  console.log(rand)

  const randomElement = el[rand];
  // Click on the random element
  await randomElement.click();
    }


}