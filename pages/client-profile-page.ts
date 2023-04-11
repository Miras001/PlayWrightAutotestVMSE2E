import type { Page } from 'playwright';
import { HomePage } from './client-home-page';

export class ProfilePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        
    }
    
    async openProfile() {
        await this.page.click('.MuiToolbar-gutters .MuiIconButton-label');
        await this.page.click('[href="\/profile"] [tabindex]');
    }
    async goToUserProfile() {
        await this.page.click('button#vertical-tab-common');
    }

    async goToPassword() {
        await this.page.click('button#vertical-tab-password');
    }
    async goToRightsAndRoles() {
        await this.page.click('button#vertical-tab-rights');
    }
    async goToActivity() {
        await this.page.click('button#vertical-tab-activity');
    }
    async fioField() {
        await this.page.click('');
    }
    async iinField() {
        await this.page.click('');
    }
    async emailField() {
        await this.page.click('');
    }
}

