import { randamnum, getNumberAfterComma } from '../config';
import Base from './Base';
import { wishUrl } from '../config';


const elements = {
  regcatigories: 'a.link-roompages',

};

export default class Header extends Base {

  // Go to wishlist
  async Gotowishlist() {
    await page.goto(wishUrl); // open WishList through the url

    //      await page.waitForNavigation({ waitUntil: 'networkidle0' });
    //  this.scrollUp();  // Scroll to the top of the page
    //  await page.waitForNavigation({ waitUntil: 'networkidle0' });
    //  await page.click('.headerElement__icon--wishlist'); //open wishlist
  }
  // Go to Cart
  async GotoCart() {

  }



}
