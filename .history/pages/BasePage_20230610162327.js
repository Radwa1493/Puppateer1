export default class BasePage {

	async wait(time) {
		await page.waitFor(time)
	}
	async waitselector(e) {
		await page.waitFor(time)
	}
	//Fun to get web page title
	async getTitle() {
		return await page.title()
	}

	async getUrl() {
		return await page.url()
	}
}
