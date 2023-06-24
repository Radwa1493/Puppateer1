import { randamnum,convertTextToNumber } from '../config';
import Base from './Base';
import { wishUrl } from '../config';

let totalprice = 0;
let Items = [];
let selected = [];
// Category Page Locators
const elements = {
  regcatigories: 'a.link-roompages',
  ItemName1: 'span.articleFullName__specification:nth-child(1)',
  ItemName2: 'span.articleFullName__name:nth-child(2)',
  wishlist: '.headerElement__icon--wishlist',
  addtoCart: '.addToCart__buttonContainer--noLogistic > .button',
  zipcode:'#zipCodeOverlayInput',
  price: '.priceNew--row',
  itemFav: 'div.wishlistIcon:nth-child(1)',
  prudectselment: "a[href*='/artikel/']",
};

export default class CatPage extends Base {
  //Fun select randam category
  async selectRandamCat() {
    const e = await page.$$(elements.regcatigories); //get array of categories webelements
   const rand = randamnum(0); //get randam number
   //const rand = 5 ; // select second category
    console.log('randam cataloge ' + rand); // display the randam number
    await e[rand].click(); // open randam category
  }

  //Fun select randam Item
  async selectRandamItem() {
      // Wait for page to be loaded
      await this.waitloadPage();
    //loop 5 times
    for (let i = 0; i < 1; i++) {
      await this.wait(5000);
      await this.waitloadPage();
      const products = await page.$$("a[href*='/artikel/']"); //get all items in array of web of elements
      const rand = randamnum(products.length); //get randam item
      selected.push(rand);

      //remove added tp fav item from list of products
      if (i > 0) {
        for (let j = 0; j < selected.length; j++) {
          products.splice(selected[j], 1); //remove rand item from list of elemnts
        }
      }
      console.log('Randam item number : ' + rand); // display rand item number

      await products[rand].click(); // open rand item
      await this.wait(5000);
      await this.waitloadPage();

//      await page.waitForSelector(elements.itemFav); // wait
    //  await page.click(elements.itemFav); //add to wish list

        // Find the element you want to click and click it
        await this.scrollDown();
        // get all links in the age in array and click on cat link
        await page.click(".addToCart__buttonContainer--infoBlock > button:nth-child(1)"); // add to cart
        // Check if the element with selector "#my-element" is displayed
        await this.scrollUp();
       // If the element is displayed, 
      //  if (await this.isElementDisplayed(elements.zipcode)) {
    //    await page.$eval('#zipCodeOverlayInput', el => el.value = '10115');//set zipcode
     //  await page.type("#zipCodeOverlayInput", "10115"); 
       await page.click(".addToCart__buttonContainer--infoBlock > button:nth-child(1)"); // add to cart

    //    await page.click(".button--outOfStock"); // add to cart
 // }

      const price = await this.getText(page, elements.price); // get item price in text
      const itemName1Text = await this.getText(page, elements.ItemName1); // get item name1 in text
      const ItemName = itemName1Text; //+" "+ itemName2Text
      console.log('Item : ' + ItemName + ' - price : ' + price); //display the price
      totalprice = totalprice + convertTextToNumber(price);
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
