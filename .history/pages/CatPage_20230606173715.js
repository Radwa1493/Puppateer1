
const elements ={
    regcatigories:'  // Wait for any additional content to be loaded
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    ',
 
 }

export default class CatPage {
    async selectRandamCat(){

          // Select all the elements you want to choose from
  const e = await page.$$(elements.selectRandamCat);
  
  // Get a random element from the list
  const randomElement = e[Math.floor(Math.random() * 31)];
  console.log(randomElement)
  // Click on the random element
  await randomElement.click();
    }


}