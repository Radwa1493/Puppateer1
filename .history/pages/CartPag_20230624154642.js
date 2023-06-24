import { convertTextToNumber } from '../config';
import Base from './Base';


// Category Page Locators
const elements = {
  integer: '.cartOverview__summaryContainer:nth-child(1) #totalPrice .articlePrice__integer',
  fraction: '.cartOverview__summaryContainer:nth-child(1) #totalPrice .articlePrice__fraction--dash',
  shipping : '.cartOverview__summaryContainer--desktop .summaryBox__line:nth-child(2) .articlePrice'
};

export default class CartPage extends Base {
  //Fun select randam category
  async GetExpectedPrice() {
    const shipping = await this.getText(page, elements.shipping); // get  shipping in text
    const shipping1 =convertTextToNumber(shipping);
    console.log('Shipping: ' + shipping1);
    
    const Exprice1 = await this.getText(page, elements.integer); // get  price in text
    const Exprice2 = await this.getText(page, elements.fraction); // get .00 price in text
    const Exprice3 =Exprice1+ Exprice2; // get total price in text
    const Exprice4 =convertTextToNumber(Exprice3);
    console.log('Total: ' + Exprice4);

  }

 
}
