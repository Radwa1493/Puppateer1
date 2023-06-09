
const elements ={
    regcatigories:'a.link-roompages'
 
 }

export default class CatPage {
    async selectRandamCat(){
 
        await page.waitForTimeout(5000)
          // Select all the elements you want to choose from
  const el = await page.$$('elements.selectRandamCat');
    const rand = Math.floor(Math.random() * 30);
    console.log(rand);
    await el[rand].click();  
   
  

}


}