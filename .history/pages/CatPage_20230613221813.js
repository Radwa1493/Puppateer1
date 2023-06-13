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
  price: '.priceNew--row',
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
    await page.waitForTimeout(3000); //wait
    count = 1
    //loop 5 times
    for (let i = 0; i < 5; i++) {

      await page.waitForTimeout(3000); //wait

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
      await page.waitForSelector(elements.itemFav); // wait
      await page.click(elements.itemFav); //add to wish list

      const price = await this.getText(elements.price); // get item price in text
      const itemName1Text = await this.getText(elements.ItemName1); // get item name1 in text
//   const itemName2Text = await this.getText(elements.ItemName2); // get item name2 in text


      const ItemName = itemName1Text; //+" "+ itemName2Text
      console.log('Item : '++" -" + ItemName + ' - price : ' + price); //display the price
      totalprice = totalprice + getNumberAfterComma(price);
      Items.push(ItemName); // add the ItemName to the Items array

      await page.goBack();
    }
    console.log('Items: ' + Items);
    await this.waitTillLoadPage();//wait

    console.log('Total Expected Price : ' + totalprice);
    // Scroll to the top of the page
    await this.scrollUp();
   // this.wait(300);
   await this.waitTillLoadPage();
    
   await page.click('.headerElement__icon--wishlist'); //open wish list
  }
  // get expected total price
  getmail() {
    return totalprice;
  }
}
