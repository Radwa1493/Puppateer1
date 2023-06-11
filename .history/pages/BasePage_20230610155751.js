export default class BasePage {

	async wait(time) {
		await page.waitFor(time)
	}
	//Fun to get page title
	async getTitle() {
		return await page.title()
	}

	async getUrl() {
		return await page.url()
	}
}
