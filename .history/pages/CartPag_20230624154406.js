import { convertTextToNumber } from '../config';
import Base from './Base';


// Category Page Locators
const elements = {
  integer: '.cartOverview__summaryContainer:nth-child(1) #totalPrice .articlePrice__integer',
  fraction: '.cartOverview__summaryContainer:nth-child(1) #totalPrice .articlePrice__fraction--dash'
  s
};

export default class CartPage extends Base {
  //Fun select randam category
  async GetExpectedPrice() {
    const Exprice1 = await this.getText(page, elements.integer); // get  price in text
    const Exprice2 = await this.getText(page, elements.fraction); // get .00 price in text
    const Exprice3 =Exprice1+ Exprice2; // get total price in text
    const Exprice4 =convertTextToNumber(Exprice3);
    console.log('Total: ' + Exprice4);

  }

 
}
