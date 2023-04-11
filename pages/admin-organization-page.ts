import type { Page } from 'playwright';

export class OrganizationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async openCreateparentOrganization() {
        await this.page.click('button[title="Добавить головную организацию"]');
        await this.page.click('button:has-text("Отмена")');
     }
    async createParentOrganization(title: string, bin: string) {
        await this.page.click('button[title="Добавить головную организацию"]');
        await this.page.type('input[placeholder="Название\\ организации"]', title);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
        await this.page.type('input[placeholder="БИН"]', bin);
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createParentOrganizationname(noValuetitle: string, bin: string) {
        await this.page.click('button[title="Добавить головную организацию"]');
        // await this.page.click('text=Тест1БИН 123456789011 >> button');
        // await this.page.click('text=Редактировать головную организацию >> nth=-1');
        await this.page.type('input[placeholder="Название\\ организации"]', noValuetitle);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', noValuetitle);
        // await this.page.click('text=БИНБИН >> button');
        await this.page.type('input[placeholder="БИН"]', bin);
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createParentOrganizationbin11(title: string, bin11: string) {
        await this.page.click('button[title="Добавить головную организацию"]');
        await this.page.type('input[placeholder="Название\\ организации"]', title);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
        await this.page.type('input[placeholder="БИН"]', bin11);
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createParentOrganizationbin13(title: string, bin13: string) {
        await this.page.click('button[title="Добавить головную организацию"]');
        await this.page.type('input[placeholder="Название\\ организации"]', title);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
        await this.page.type('input[placeholder="БИН"]', bin13);
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createOrganization(title: string, bin: string) {
        await this.page.click('text="БИН 123456789011"');
        await this.page.click('button[title="Добавить организацию"]');
        await this.page.type('input[placeholder="Название\\ организации"]', title);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
        await this.page.type('input[placeholder="БИН"]', bin);
        await this.page.click('button:has-text("Сохранить изменения")');
    }
    async createOrganizationname(noValuetitle: string, bin: string) {
        await this.page.click('text="БИН 123456789011"');
        await this.page.click('button[title="Добавить организацию"]');
        // await this.page.click('text=Тест1БИН 123456789011 >> button');
        // await this.page.click('text=Редактировать головную организацию >> nth=-1');
        await this.page.type('input[placeholder="Название\\ организации"]', noValuetitle);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', noValuetitle);
        // await this.page.click('text=БИНБИН >> button');
        await this.page.type('input[placeholder="БИН"]', bin);
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createOrganizationbin11(title: string, bin11: string) {
        await this.page.click('text="БИН 123456789011"');
        await this.page.click('button[title="Добавить организацию"]');
        await this.page.type('input[placeholder="Название\\ организации"]', title);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
        await this.page.type('input[placeholder="БИН"]', bin11);
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createOrganizationbin13(title: string, bin13: string) {
        await this.page.click('text="БИН 123456789011"');
        await this.page.click('button[title="Добавить организацию"]');
        await this.page.type('input[placeholder="Название\\ организации"]', title);
        await this.page.type('text=Название организации - на русскомНазвание организации - на русском >> [placeholder="Название\\ организации"]', title);
        await this.page.type('input[placeholder="БИН"]', bin13);
        await this.page.click('button:has-text("Сохранить изменения")');
    }    

    async createObject(title: string) {
        await this.page.click('.expand-tree-org251');
        await this.page.click('.expand-tree-org251-org252');
        await this.page.click('text="БИН 123456789101"'); 
        await this.page.click('button[title="Добавить объект"]');
        await this.page.type('text=Название объекта - на казахскомНазвание объекта - на казахском >> input[type="text"]', title);
        await this.page.type('text=Название объекта - на русскомНазвание объекта - на русском >> input[type="text"]', title);
        await this.page.click('[role="button"]:has-text("​")');
        await this.page.click('[role="listbox"] >> text=Двор');
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createObjectname() {
        await this.page.click('.expand-tree-org251');
        await this.page.click('.expand-tree-org251-org252');
        await this.page.click('text="БИН 123456789101"'); 
        await this.page.click('button[title="Добавить объект"]');
        // await this.page.type('text=Название объекта - на казахскомНазвание объекта - на казахском >> input[type="text"]', noValuetitle);
        // await this.page.type('text=Название объекта - на русскомНазвание объекта - на русском >> input[type="text"]', noValuetitle);
        // await this.page.click('name="object_type_id"');
        await this.page.click('[role="button"]:has-text("​")');
        await this.page.click('[role="listbox"] >> text=Двор');
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createObjectgroupe(title: string) {
        await this.page.click('.expand-tree-org251');
        await this.page.click('.expand-tree-org251-org252');
        await this.page.click('text="БИН 123456789101"'); 
        await this.page.click('button[title="Добавить объект"]');
        await this.page.type('text=Название объекта - на казахскомНазвание объекта - на казахском >> input[type="text"]', title);
        await this.page.type('text=Название объекта - на русскомНазвание объекта - на русском >> input[type="text"]', title);
        // await this.page.click('name="object_type_id"');
        // await this.page.click('[role="button"]:has-text("​")');
        // await this.page.click('[role="listbox"] >> text=Двор');
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createcamera(title: string, login: string, password: string, ip: string, port: string) {
        await this.page.click('.expand-tree-org251');
        await this.page.click('.expand-tree-org251-org252');
        await this.page.click('text="QhQ"');
        await this.page.click('button[title="Добавить камеру"]');
        await this.page.type('text=Имя камерыИмя камеры >> input[type="text"]', title);
        await this.page.click('div[role="button"]:has-text("​")');
        await this.page.click('text=DH-HAC-HFW1000SP-0360B-S3');
        await this.page.type('text=ЛогинЛогин >> input[type="text"]', login);
        await this.page.type('input[type="password"]', password);
        await this.page.type('text=IPIP >> input[type="text"]', ip);
        await this.page.type('text=ПортПорт >> input[type="text"]', port);
        await this.page.click('input[name="server_id"]');
        await this.page.click('button:has-text("Автозаполнение")');
        await this.page.click('button:has-text("Сохранить изменения")');
    }
    async createnamecamera(noValuetitle: string, login: string, password: string, ip: string, port: string) {
        await this.page.click('.expand-tree-org251');
        await this.page.click('.expand-tree-org251-org252');
        await this.page.click('text="QhQ"');
        await this.page.click('button[title="Добавить камеру"]');
        await this.page.type('text=Имя камерыИмя камеры >> input[type="text"]', noValuetitle);
        await this.page.click('div[role="button"]:has-text("​")');
        await this.page.click('text=DH-HAC-HFW1000SP-0360B-S3');
        await this.page.type('text=ЛогинЛогин >> input[type="text"]', login);
        await this.page.type('input[type="password"]', password);
        await this.page.type('text=IPIP >> input[type="text"]', ip);
        await this.page.type('text=ПортПорт >> input[type="text"]', port);
        await this.page.click('input[name="server_id"]');
        await this.page.click('button:has-text("Автозаполнение")');
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createmodelcamera(title: string, login: string, password: string, ip: string, port: string) {
        await this.page.click('.expand-tree-org251');
        await this.page.click('.expand-tree-org251-org252');
        await this.page.click('text="QhQ"');
        await this.page.click('button[title="Добавить камеру"]');
        await this.page.type('text=Имя камерыИмя камеры >> input[type="text"]', title);
        // await this.page.click('div[role="button"]:has-text("​")');
        // await this.page.click('text=DH-HAC-HFW1000SP-0360B-S3');
        await this.page.type('text=ЛогинЛогин >> input[type="text"]', login);
        await this.page.type('input[type="password"]', password);
        await this.page.type('text=IPIP >> input[type="text"]', ip);
        await this.page.type('text=ПортПорт >> input[type="text"]', port);
        await this.page.click('input[name="server_id"]');
        await this.page.click('button:has-text("Автозаполнение")');
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createipportcamera(title: string, nologin: string, nopassword: string, noip: string, noport: string) {
        await this.page.click('.expand-tree-org251');
        await this.page.click('.expand-tree-org251-org252');
        await this.page.click('text="QhQ"');
        await this.page.click('button[title="Добавить камеру"]');
        await this.page.type('text=Имя камерыИмя камеры >> input[type="text"]', title);
        await this.page.click('div[role="button"]:has-text("​")');
        await this.page.click('text=DH-HAC-HFW1000SP-0360B-S3');
        await this.page.type('text=ЛогинЛогин >> input[type="text"]', nologin);
        await this.page.type('input[type="password"]', nopassword);
        await this.page.type('text=IPIP >> input[type="text"]', noip);
        await this.page.type('text=ПортПорт >> input[type="text"]', noport);
        await this.page.click('input[name="server_id"]');
        await this.page.click('button:has-text("Автозаполнение")');
        await this.page.click('button:has-text("Сохранить изменения")');
    }

    async createservertcamera(title: string, login: string, password: string, ip: string, port: string) {
        await this.page.click('.expand-tree-org251');
        await this.page.click('.expand-tree-org251-org252');
        await this.page.click('text="QhQ"');
        await this.page.click('button[title="Добавить камеру"]');
        await this.page.type('text=Имя камерыИмя камеры >> input[type="text"]', title);
        await this.page.click('div[role="button"]:has-text("​")');
        await this.page.click('text=DH-HAC-HFW1000SP-0360B-S3');
        await this.page.type('text=ЛогинЛогин >> input[type="text"]', login);
        await this.page.type('input[type="password"]', password);
        await this.page.type('text=IPIP >> input[type="text"]', ip);
        await this.page.type('text=ПортПорт >> input[type="text"]', port);
        // await this.page.click('input[name="server_id"]');
        await this.page.click('button:has-text("Автозаполнение")');
        await this.page.click('button:has-text("Сохранить изменения")');
    }


    async deleteCamera() {
        await this.page.click('.expand-tree-org251');
        await this.page.click('.expand-tree-org251-org252');
        await this.page.click('.expand-tree-org251-org252-obj174');
        await this.page.click('text=OFFFix 12.200.10.101 >> button');
        await this.page.click('text=Удалить камеру >> nth=-1');
        await this.page.click('button:has-text("Удалить")');
    }

    async deleteObject() {
        await this.page.click('.expand-tree-org251');
        await this.page.click('.expand-tree-org251-org252');
        await this.page.click('text="Тест3"');
        await this.page.click('text=Тест3Двор >> button');
        await this.page.click('text=Удалить объект >> nth=-1');
        await this.page.click('button:has-text("Удалить")');
    }

    async deleteorganization() {
        await this.page.click('.expand-tree-org367');
        await this.page.click('text=Тест1БИН 123456789012 >> button');
        await this.page.click('text=Удалить организацию >> nth=-1');
        await this.page.click('button:has-text("Удалить")');
    }

    async deleteparentorganization() {
        await this.page.click('text=Тест1БИН 123456789011 >> button');
        await this.page.click('text=Удалить головную организацию >> nth=-1');
        await this.page.click('button:has-text("Удалить")');
    }
    
}  