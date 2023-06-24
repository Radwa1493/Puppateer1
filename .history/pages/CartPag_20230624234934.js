import { convertTextToNumber } from '../config';
import Base from './Base';
let totalActualprice = 0.0;
const actualitemslist = [];

// Category Page Locators
const elements = {
  //integer: '.cartOverview__summaryContainer:nth-child(1) #totalPrice .articlePrice__integer',
  //fraction: '.cartOverview__summaryContainer:nth-child(1) #totalPrice .articlePrice__fraction--dash',
 CartPrice:'.cartOverview__summaryContainer:nth-child(1) #totalPrice div',
  shipping : '.cartOverview__summaryContainer--desktop .summaryBox__line:nth-child(2) .articlePrice',
 
  discount : '.cartOverview__summaryContainer--desktop .summaryBox__line:nth-child(3) .articlePrice',
  itemname : '.simpleText--articleNameFont',
};

export default class CartPage extends Base {
  //Fun select randam category
  async GetCartPrice() {
    await page.waitForSelector(elements.totalPrice);
    await this.wait(5000);
    const Exprice = await this.getText(page, elements.totalPrice); // get item price in text
   let CartPrice = parseFloat(Exprice.replace(".", "").replace(",", ".").replace(/-/, ""));

    console.log('Cart Price: ' + CartPrice);

    const shipping = await this.getText(page, elements.shipping); // get  shipping in text
    const shipping1 =   parseFloat(shipping.replace(",", "."));  
    console.log('Shipping: ' + shipping1);  


    // get discount price if exist
    let discount1=0.0 ;
    if (await this.isElementDisplayed(elements.discount)) {
      const discount = await this.getText(page,elements.discount); // get  discount in text
      discount1 =  parseFloat( discount.replace(/-/g, "").replace(",", "."));  
      console.log('Discount: ' + discount1);
    }
// caluculate total expected price
    totalActualprice = CartPrice-shipping1+discount1; 
    console.log('Total actual Price: ' + totalActualprice);
//get actual items name
    const items = await page.$$(elements.itemname); 
    for (let i = 0; i < items.length; i++) {
      const itemText = await items[i].getProperty('innerText');
      const text = await itemText.jsonValue();
      actualitemslist.push(text);
    }    
    console.log("Actual items : "+actualitemslist); 
  }
    // get Actual total price
    async GetAcualtotalprice() {
      return totalActualprice;
    }
    // get Actual items
    async GetAcualitems() {
      return actualitemslist;
    }
}
