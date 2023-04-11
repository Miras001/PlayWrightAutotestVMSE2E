import type { Page } from 'playwright';

export class ServerPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async openServer() {
        await this.page.click('text=Серверы');

        await this.page.click('button#update'),
    }
   


}