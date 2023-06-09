
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
        console.log('randam cataloge '+rand);

        await e[rand].click();

        await page.waitForTimeout(5000)
   

}

 async selectRandamItem(){
    await page.waitForTimeout(10000)

        const i1 = await page.$$(elements.Items1);
        const i2 = await page.$$(elements.Items2);
        const combined = [...i1, ...i2];
        const rand = Math.floor(Math.random() * i1..length);
        console.log('randam item '+rand);

      // Scroll down the page by the height of the viewport
      await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
      });
        
        await combined[rand].click();
     //  const rand = Math.floor(Math.random() * 30);
      //  console.log(rand);
      //  await combined[rand].click();       
 //     while (i1.length < 5) {
   //     const randomIndex = Math.floor(Math.random() * i1.length);
    //    await combined[randomIndex].click();
     //   combined.splice(0, randomIndex);
   //   }
     // Scroll to the top of the page
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(5000)

      await page.click(elements.wishlist)


}

}