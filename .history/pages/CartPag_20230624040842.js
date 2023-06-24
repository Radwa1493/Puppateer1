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
    const e = await page.$$(elements.regcatigories); //get array of categories webelements
    const rand = randamnum(30); //get randam number
    console.log('randam cataloge ' + rand); // display the randam number
    await e[rand].click(); // open randam category
  }

 
}
