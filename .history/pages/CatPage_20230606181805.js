
const elements ={
    regcatigories:'a.link-roompages'
 
 }

export default class CatPage {
    async selectRandamCat(){
        const e = await page.$$(elements.Homelinks);
        await e[9].click();
        
          // Select all the elements you want to choose from
  const el = await page.$$(elements.selectRandamCat);
    const rand = Math.floor(Math.random() * 30);
    console.log(rand);
    await el[rand].click();  
   
    // Wait for any additional content to be loaded
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

}


}