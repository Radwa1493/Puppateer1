
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
 // Wait for the page to load completely
 //await page.waitForLoadState();
 await page.waitForTimeout(7000)

  // Get a list of all the products on the page
  const productList = await page.$$('div.sc-105y4a6-0 > div:nth-child(9)');

  // Create an array of 5 random indices
  const randomIndices = Array.from({ length: 5 }, () => Math.floor(Math.random() * productList.length));

  // Loop through the random indices and click on the favorite button for each product
  for (const index of randomIndices) {
    const product = productList[index];
    await page.

   // const favoriteButton = await product.$('.favorite-btn');
    await product.click();
  }

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