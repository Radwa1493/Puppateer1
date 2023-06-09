
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

  await el[rand].click;
  // Click on the random element
  await randomElement.click();
   

  await e[9].click();


}


}