import { randamnum,convertTextToNumber } from '../config';
import Base from './Base';


// Category Page Locators
const elements = {
  integer: 'div.cartOverview__summaryContainer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)',
  fraction: 'div.cartOverview__summaryContainer:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)',

};

export default class CatPage extends Base {
  //Fun select randam category
  async GetExpectedPrice() {
    const Exprice = await this.getText(page, elements.integer); // get item price in text
    const Exprice = await this.getText(page, elements.fraction); // get item price in text

  }

 
}
