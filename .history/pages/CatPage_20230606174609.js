
const elements ={
    regcatigories:'div.ccm-content-slider div li a',
 
 }

export default class CatPage {
    async selectRandamCat(){

          // Select all the elements you want to choose from
  const el = await page.$$('div.ccm-content-slider div li a');
  
  // Get a random element from the list
  const rand = Math.floor(Math.random() * 31);
  console.log(rand)

  // Click on the random element
  await el[rand].click();
   



}


}