import type { Page } from 'playwright';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(email: string, password: string) {
        await this.page.reload();
        await this.page.type('input[name="email"]', email);
        await this.page.type('input[name="password"]', password);
        await this.page.click('.MuiButton-label');
    }

    async restorePassword(testemail: string) {
        await this.page.click('.MuiLink-root');
        await this.page.type('input[name="email"]', testemail);
        await this.page.click('button .MuiButton-label');
    }

    async deletedUser(deletedmail: string, deletedpassword: string) {
        await this.page.type('input[type="text"]',deletedmail);
        await this.page.type('input[type="password"]', deletedpassword);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async blockedUser(blockedemail: string, blockedpassword: string) {
        await this.page.type('input[type="text"]',blockedemail);
        await this.page.type('input[type="password"]', blockedpassword);
        await this.page.click('button:has-text("Войти в систему")');
    }

    async noValue(noValueemail: string, noValuepassword: string) {
        await this.page.type('input[type="text"]',noValueemail);
        await this.page.type('input[type="password"]', noValuepassword);
        await this.page.click('button:has-text("Войти в систему")');
    }
    async сyrillicEmail(cyrillicemail: string, password: string) {
        await this.page.type('input[type="text"]', cyrillicemail);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }
    async latinEmail(latinemail: string, password: string) {
        await this.page.type('input[type="text"]', latinemail);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }
    async specialSymbolsemail(specsymbolemail: string, password: string) {
        await this.page.type('input[type="text"]', specsymbolemail);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }
    async symbolsEmail(symbolemail: string, password: string) {
        await this.page.type('input[type="text"]', symbolemail);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }
    async emailwithoutdomain(emailnotdomain: string, password: string) {
        await this.page.type('input[type="text"]', emailnotdomain);
        await this.page.type('input[type="password"]', password);
        await this.page.click('button:has-text("Войти в систему")');
    }
    async emailAvailableCharacters(adminemail: string, adminpassword: string) {
        await this.page.type('input[type="text"]', adminemail);
        await this.page.type('input[type="password"]', adminpassword);
        await this.page.click('button:has-text("Войти в систему")');
    }
    async passwordCyrillic(email: string, passwordcyrillic: string) {
        await this.page.type('input[type="text"]', email);
        await this.page.type('input[type="password"]', passwordcyrillic);
        await this.page.click('button');
        await this.page.click('button:has-text("Войти в систему")');
    }
    async passwordLatin(adminemail: string, passwordlatin: string) {
        await this.page.type('input[type="text"]', adminemail);
        await this.page.type('input[type="password"]', passwordlatin);
        await this.page.click('button');
        await this.page.click('button:has-text("Войти в систему")');
    }
    async passwordspecialsymbols(email: string, passwordspecsymbol: string) {
        await this.page.type('input[type="text"]', email);
        await this.page.type('input[type="password"]', passwordspecsymbol);
        await this.page.click('button');
        await this.page.click('button:has-text("Войти в систему")');
    }
    async novaluePassword(adminemail: string, noValuepassword: string) {
        await this.page.type('input[type="text"]', adminemail);
        await this.page.type('input[type="password"]', noValuepassword);
        await this.page.click('button');
        await this.page.click('button:has-text("Войти в систему")');
    }
    async restorePasswordnovalue(noValueemail: string) {
        await this.page.click('text=Восстановить пароль');
        await this.page.type('input[type="text"]', noValueemail);
        await this.page.click('button:has-text("Выслать ссылку")');
    }
    async restorePasswordemailwithoutdomain(emailnotdomain: string) {
        await this.page.click('text=Восстановить пароль');
        await this.page.type('input[type="text"]', emailnotdomain);
        await this.page.click('button:has-text("Выслать ссылку")');
    }
    async restorePasswordemailcyrillic(cyrillicemail: string) {
        await this.page.click('text=Восстановить пароль');
        await this.page.type('input[type="text"]', cyrillicemail);
        await this.page.click('button:has-text("Выслать ссылку")');
    }
    async restorePasswordemailnumber(emailnumber: string) {
        await this.page.click('text=Восстановить пароль');
        await this.page.type('input[type="text"]', emailnumber);
        await this.page.click('button:has-text("Выслать ссылку")');
    }

}