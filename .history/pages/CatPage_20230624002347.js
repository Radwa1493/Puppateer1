import { randamnum, getNumberAfterComma } from '../config';
import Base from './Base';

let totalprice = 0;
let Items = [];
let selected = [];
// Category Page Locators
const elements = {
  regcatigories: 'a.link-roompages',
  ItemName1: 'span.articleFullName__specification:nth-child(1)',
  ItemName2: 'span.articleFullName__name:nth-child(2)',
  wishlist: '.headerElement__icon--wishlist',
  AddtoCart: '.addToCart__buttonContainer--noLogistic > .button',
  ContineShop:'#overlayRight #addToCartCloseBox',
  price: '.priceNew--row',
 // pricefactor: '.priceNew--row .priceNew__fraction',

  itemFav: 'div.wishlistIcon:nth-child(1)',
  prudectselment: "a[href*='/artikel/']",

};

export default class CatPage extends Base {
  //Fun select randam category
  async selectRandamCat() {
    const e = await page.$$(elements.regcatigories); //get array of categories webelements
    const rand = randamnum(30); //get randam number
    console.log('randam cataloge ' + rand); // display the randam number
    await e[rand].click(); // open randam category
  }

  //Fun select randam Item
  async selectRandamItem() {
      // Wait for page to be loaded
      await this.waitloadPage();
    //loop 5 times
    for (let i = 0; i < 5; i++) {
      await this.wait(5000);
      // await page.waitForNavigation({ waitUntil: 'networkidle0' });
      const products = await page.$$("a[href*='/artikel/']"); //get all items in array of web of elements
      const rand = randamnum(products.length); //get randam item
      selected.push(rand);

      //remove added to fav item from list of products
      if (i > 0) {
        for (let j = 0; j < selected.length; j++) {
          products.splice(selected[j], 1); //remove rand item from list of elemnts
        }
      }
      console.log('Randam item number : ' + rand); // display rand item number

      await products[rand].click(); // open rand item
      await page.waitForSelector(elements.itemFav); // wait
      await page.click(elements.itemFav); //add to wish list
      await page.click(elements.AddtoCart); //add to cart 
      await page.click(elements.ContineShop); //Countine shopping 


      const priceElement = document.querySelector(elements.price);
      const priceText = priceElement.textContent;
      
      //   const name2Element = await page.$(elements.ItemName2); //name2 element
      //    const itemName2Text = await page.evaluate(name2Element => name2Element.textContent, name2Element);// get item name1 in text

      const ItemName = itemName1Text; //+" "+ itemName2Text
      console.log('Item : ' + ItemName + ' - price : ' + priceText); //display the price

      const price = parseFloat(priceText);

      totalprice = totalprice+price;

      Items.push(ItemName); // add the ItemName to the Items array

      await page.goBack();
    }
    console.log('Items: ' + Items);
    console.log('Total Expected Price : ' + totalprice);

  }
  // get expected total price
  totalprice() {
    return totalprice;
  }





}
