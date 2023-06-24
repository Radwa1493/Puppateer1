import { convertTextToNumber } from '../config';
import Base from './Base';
let totalActualprice = 0;


// Category Page Locators
const elements = {
  integer: '.cartOverview__summaryContainer:nth-child(1) #totalPrice .articlePrice__integer',
  fraction: '.cartOverview__summaryContainer:nth-child(1) #totalPrice .articlePrice__fraction--dash',
  shipping : '.cartOverview__summaryContainer--desktop .summaryBox__line:nth-child(2) .articlePrice',
  discount : '.cartOverview__summaryContainer--desktop .summaryBox__line:nth-child(3) .articlePrice'

};

export default class CartPage extends Base {
  //Fun select randam category
  async GetExpectedPrice() {

    const Exprice1 = await this.getText(page, elements.integer); // get  price in text
    const Exprice2 = await this.getText(page, elements.fraction); // get .00 price in text
    const Exprice3 =Exprice1+ Exprice2; // get total price in text
    const Exprice4 =convertTextToNumber(Exprice3);
    console.log('Cart Price: ' + Exprice4);

    const shipping = await this.getText(page, elements.shipping); // get  shipping in text
    const shipping1 =convertTextToNumber(shipping);
    console.log('Shipping: ' + shipping1);  
    // get discount price if exist
    const discount1 =0;
    if (await this.isElementDisplayed('.cartOverview__summaryContainer--desktop .summaryBox__line:nth-child(3) .articlePrice')) {
      const discount = await this.getText(page,'.cartOverview__summaryContainer--desktop .summaryBox__line:nth-child(3) .articlePrice'); // get  discount in text
      discount1 =convertTextToNumber(discount);
      console.log('Discount: ' + discount1);
    }

    totalActualprice = Exprice4+shipping1-discount1; // caluculate total expected price
    console.log('Total actual Price: ' + totalActualprice);

  }
    // get Actual total price
    totalprice() {
      return totalActualprice;
    }
}
