
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

     //   await e[rand].click();

        await e[rand].click();

}

 async selectRandamItem(){
// Wait for the page to load
await page.waitForTimeout(9000)

    // Get list of all Sessel products
    const products = await page.$$("a[href*='/artikel/']");
    const rand = Math.floor(Math.random() * products.length);
    console.log('randam item '+rand);
          // Scroll down the page by the height of the viewport
await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
  });
    
    const i1 = await page.$$("a[href*='/artikel/']");
    await i1[rand].click();
    await page.waitForTimeout(2000)

  //  await page.waitForSelector('div.wishlistIcon:nth-child(1)')
    await page.click('div.wishlistIcon:nth-child(1)')
   // await page.waitForTimeout(3000)



   
    await page.click('.headerElement__icon--wishlist')

    await page.waitForTimeout(9000)


    const priceElement = await page.$('.priceNew--row');
    await page.waitForSelector(priceElement);
    const text = await page.evaluate(priceElement => priceElement.textContent, priceElement);
    console.log(text);



    
    

/*
 // Scroll down the page by the height of the viewport
      await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
      });
    const i1 = await page.$$('div.sc-105y4a6-0 > div:nth-child(9)');
        const i2 = await page.$$('div.sc-105y4a6-0 > div:nth-child(10)');
        const combined = [...i1, ...i2];
        const rand = Math.floor(Math.random() * i1.length+1);
        console.log('randam item '+rand);
        await i1[rand].click();

/*
      // Scroll down the page by the height of the viewport
      await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight);
      });
      */
        
     //  const rand = Math.floor(Math.random() * 30);
      //  console.log(rand);
      //  await combined[rand].click();       
 //     while (i1.length < 5) {
   //     const randomIndex = Math.floor(Math.random() * i1.length);
    //    await combined[randomIndex].click();
     //   combined.splice(0, randomIndex);
   //   }
     // Scroll to the top of the page
 
 /*    await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  */

 //     await page.click(elements.wishlist)


}

}