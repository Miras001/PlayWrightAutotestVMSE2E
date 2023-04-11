import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
  
  }

    //Открыть главную страницу
    async open() {
        await this.page.goto('http://admin.qazvms.local/login');
    }

    async openGIS() {
        await this.page.goto('http://admin.qazvms.local/gis');
    }

    async openProfile() {
        await this.page.goto('http://client.qazvms.local/profile');
    }
}
