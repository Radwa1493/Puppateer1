
const elements ={
    regcatigories:'a.link-roompages',
    Items1: 'div.sc-105y4a6-0 > div:nth-child(9)',
    Items2: 'div.sc-105y4a6-0 > div:nth-child(10)',
    wishlist:'.headerElement__icon--wishlist'
 }

export default class CatPage {
    async selectRandamCat(){
        const e = await page.$$(elements.regcatigories);
        const rand = Math.floor(Math.random() * 30);
        console.log(rand);

        await e[rand].click();

        await page.waitForTimeout(5000)
   

}

 async selectRandamItem(){
    await page.waitForTimeout(5000)

        const i1 = await page.$$(elements.Items1);
        const i2 = await page.$$(elements.Items1);
        const combined = [...i1, ...i2];
     //  const rand = Math.floor(Math.random() * 30);
      //  console.log(rand);
      //  await combined[rand].click();       
      while (combined.length < 5) {
        const randomIndex = Math.floor(Math.random() * combined.length);
        await combined[randomIndex].click();
        combined.splice(0, randomIndex);
      }
      await page.click(elements.wishlist)


}

}