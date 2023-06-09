
const elements ={
    regcatigories:'a.link-roompages',
    Items1: 'div.sc-105y4a6-0 > div:nth-child(9)',
    Items2: 'div.sc-105y4a6-0 > div:nth-child(10)'

 }

export default class CatPage {
    async selectRandamCat(){
        const e = await page.$$(elements.regcatigories);
        const rand = Math.floor(Math.random() * 30);
        console.log(rand);

        await e[rand].click();

        await page.waitForTimeout(5000)
   

}

 async selectRandamItem(){
        const e = await page.$$(elements.regcatigories);
        const rand = Math.floor(Math.random() * 30);
        console.log(rand);

        await e[rand].click();
        
        await page.waitForTimeout(5000)
   

}

}