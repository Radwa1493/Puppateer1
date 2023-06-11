import {  randamnum, getNumberAfterComma } from '../config'
let totalprice = 0
let Items = []
// Category Page Locators
const elements ={
    regcatigories:'a.link-roompages',
    ItemName1:'span.articleFullName__specification:nth-child(1)',
    ItemName2:'span.articleFullName__name:nth-child(2)',
    wishlist:'.headerElement__icon--wishlist',
    price:'.priceNew--row'
 }

export default class CatPage {
    //Fun select randam category
    async selectRandamCat(){
        const e = await page.$$(elements.regcatigories); //get array of categories webelements
        const rand = randamnum(30); //get randam number
        console.log('randam cataloge '+rand); // display the randam number
        await e[rand].click(); // open randam category
      }
    
    //Fun select randam Item
    async selectRandamItem(){

    for (let i = 0; i < 5; i++) { //loop 5 times     

    //  await page.waitForTimeout(6000) //wait
      // Wait for page to be loaded
      await page.waitForNavigation({ waitUntil: 'networkidle0' });
      const products = await page.$$("a[href*='/artikel/']"); //get all items in array of web of elements
      const rand = randamnum(products.length) //get randam item
      console.log('randam item number : '+rand); // display rand item number 
      
      await products[rand].click(); // open rand item
      products.splice(rand, 1); //remove rand item from list of elemnts
      await page.waitForSelector('div.wishlistIcon:nth-child(1)')
      await page.click('div.wishlistIcon:nth-child(1)') //add to wish list
      const priceElement = await page.$(price); 
      const priceElement = await page.$(price); 
      const priceElement = await page.$(price); 


      const price = await page.evaluate(priceElement => priceElement.textContent, priceElement); // get price in text
      const name1 = await page.evaluate(Name1Element => Name1Element.textContent, Name1Element); // get name2 in text
      const name2 = await page.evaluate(Name2Element => Name2Element.textContent, Name2Element); // get name2 in text
      const ItemName = name1 +" "+ name2
      console.log("Item"+ItemName+" price + "+price); //display the price
      totalprice=totalprice+getNumberAfterComma(price)
      Items.push(ItemName); // add the ItemName to the Items array

      await page.goBack();
      // Scroll to the top of the page
      await page.evaluate(() => {
        window.scrollTo(0, 0);
      });

}
console.log("Items: "+Items)

console.log("Total Expected Price : "+totalprice)

  await page.click(elements.wishlist) //open wish list

}
   // get expected total price  
   getmail(){ return totalprice   } 


}