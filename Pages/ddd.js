
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default class BasePage{


    async wait(time){

    await page.waitFor(time);

}
async getTitle(){

    return await page.title();

}
async getUrl(){

    return await page.url();

}

async ScrolltoElement(e){
  const dom = new JSDOM(`<!DOCTYPE html><div id="${e}"></div>`);
  const element = dom.window.document.getElementById(e);
  element.scrollIntoView;
}

}