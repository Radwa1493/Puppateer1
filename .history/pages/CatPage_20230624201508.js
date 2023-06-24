import { randamnum,convertTextToNumber,postalcode } from '../config';
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
  addtoCart: '.addToCart__buttonContainer > button:nth-child(1)',
  zipcode:'#zipCodeOverlayInput',
  price: '.priceNew--row',
  itemFav: 'div.wishlistIcon:nth-child(1)',
  prudectselment: "a[href*='/artikel/']",
  outOfStock:".button--outOfStock"
};

export default class CatPage extends Base {
  //Fun select randam category
  async selectRandamCat() {
    const e = await page.$$(elements.regcatigories); //get array of categories webelements
   const rand = randamnum(10); //get randam number
   //const rand = 5 ; // select second category
    console.log('randam cataloge ' + rand); // display the randam number
    await e[rand].click(); // open randam category
  }

 //Fun select randam Item
 async selectRandamItem() {
  // Wait for page to be loaded
//  await this.waitloadPage();
await this.wait(9000); // wait

//loop 5 times
for (let i = 0; i < 1; i++) {
  await this.wait(5000);
  // await page.waitForNavigation({ waitUntil: 'networkidle0' });
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
  
  //await page.click(elements.itemFav); //add to wish list
  //   const name2Element = await page.$(elements.ItemName2); //name2 element
  const price = await this.getText(page, elements.price); // get item price in text
  const itemName1Text = await this.getText(page, elements.ItemName1); // get item name1 in text
  
  await this.wait(5000); // wait
  await this.scrollDown(); // scroll down
  await this.wait(5000);// wait
  await page.click(elements.addtoCart); // add to cart
  await this.wait(4000);// wait
  if (await this.isElementDisplayed(elements.zipcode)) {
  await page.type(elements.zipcode, postalcode); // set zip
  await this.wait(7000);// wait
  await page.click(".button--outOfStock"); // add to cart
  }
  const ItemName = itemName1Text; //+" "+ itemName1Text
  console.log('Item : ' + ItemName + ' - price : ' + price); //display the price
  totalprice = totalprice + convertTextToNumber(price);
  Items.push(ItemName); // add the ItemName to the Items array

  await page.goBack();
}
console.log('EItems: ' + Items);

console.log('Total Expected Price : ' + totalprice);

}

   // get Expected total price
   async GetExpectedPrice() {
    return totalprice;
  }

    // get Actual items
    async Getexpecteditems() {
      return Items;
    }


}
