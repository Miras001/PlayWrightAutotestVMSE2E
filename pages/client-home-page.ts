import type { Page } from 'playwright';
import { isVisible } from '../framework/common-actions';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('http://client.qazvms.local/login');
    }

    async openArchive() {
        await this.page.goto('http://client.qazvms.local/archive');
    }

    async openAnalitycs() {
        await this.page.goto('http://client.qazvms.local/analitycs');
    }

    async openGIS() {
        await this.page.goto('http://client.qazvms.local/gis');
    }

    async openReports() {
        await this.page.goto('http://client.qazvms.local/reports');
    }

    async openProfile() {
        await this.page.goto('http://client.qazvms.local/profile');
    }

    async gotoGIS() {
        
        await this.page.click('[href="/gis"]');
    }
    // timeout = 0
}
