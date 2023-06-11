export default class BasePage {

	async wait(time) {
		await page.waitFor(time)
	}
	async waitselector(css) {
		await page.waitFor(time)
		await page.waitForSelector(elements.Cookies_Buttom) 

	}
	//Fun to get web page title
	async getTitle() {
		return await page.title()
	}

	async getUrl() {
		return await page.url()
	}
}
