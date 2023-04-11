import type { Page } from 'playwright';

export class JournalPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async openjournal() {
        await this.page.click('button:has-text("Журналы")');
    }

    async openjournalnotifications() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('text=Журнал уведомлений');
    }

    async openjournaltasks() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('text=Журнал заданий');
    }

    async openjournalrules() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('text=Журнал правил');
    }

    async openjournallogs() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('text=Журнал логов');
    }

    async openjournalactions() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('button[role="tab"]:has-text("действия")');
    }
    
    async openjournalusers() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('button[role="tab"]:has-text("Пользователи")');
    }

    async journallogsorg() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('text=В реальном времени');
    }

    async journallogsactions() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('button[role="tab"]:has-text("действия")');
        await this.page.click('text=В реальном времени');
    }

    async journallogsusers() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('button[role="tab"]:has-text("Пользователи")');
        await this.page.click('text=В реальном времени');
    }

    async journallogsorgperiod() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('[placeholder="день\\/месяц\\/год\\,\\ час\\:мин"]');
        await this.page.click('text=31');
        // await this.page.click('[aria-label="Choose\\ вторник\\,\\31\\ февраля\\ 2022\\ г\\."]');
        await this.page.click('button:has-text("Установить")');
        await this.page.click('button:has-text("Применить")');
        // await this.page.click('text=В реальном времени');
    }

    async journallogsactionsperiod() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('button[role="tab"]:has-text("действия")');
        await this.page.click('[placeholder="день\\/месяц\\/год\\,\\ час\\:мин"]');
        await this.page.click('text=31');
        // await this.page.click('[aria-label="Choose\\ вторник\\,\\31\\ февраля\\ 2022\\ г\\."]');
        await this.page.click('button:has-text("Установить")');
        await this.page.click('button:has-text("Применить")');
        // await this.page.click('text=В реальном времени');
    }

    async journallogsuserssperiod() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('button[role="tab"]:has-text("Пользователи")');
        await this.page.click('[placeholder="день\\/месяц\\/год\\,\\ час\\:мин"]');
        await this.page.click('[aria-label="Choose\\ понедельник\\,\\ 31\\ января\\ 2022\\ г\\."]');
        await this.page.click('button:has-text("Установить")');
        await this.page.click('button:has-text("Применить")');
        // await this.page.click('text=В реальном времени');
    }

    async journalnotifications() {
        await this.page.click('button:has-text("Журналы")');
        await this.page.click('text=Журнал уведомлений');
        await this.page.click('text=В реальном времени');
        // await this.page.click('[placeholder="день\\/месяц\\/год\\,\\ час\\:мин"]');
        // await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
        // await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
        // await this.page.click('[aria-label="Choose\\ среда\\,\\ 1\\ декабря\\ 2021\\ г\\."]');
        // await this.page.click('button:has-text("Установить")');
        // await this.page.click('button:has-text("Применить")');
        
    }

async journalnotificationsperiod() {
    await this.page.click('button:has-text("Журналы")');
    await this.page.click('text=Журнал уведомлений');
    // await this.page.click('text=В реальном времени');
    await this.page.click('[placeholder="день\\/месяц\\/год\\,\\ час\\:мин"]');
    await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
    await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
    await this.page.click('[aria-label="Choose\\ среда\\,\\ 1\\ декабря\\ 2021\\ г\\."]');
    await this.page.click('button:has-text("Установить")');
    await this.page.click('button:has-text("Применить")');

}

async journalnotificationsopen() {
    await this.page.click('button:has-text("Журналы")');
    await this.page.click('text=Журнал уведомлений');
    // await this.page.click('text=В реальном времени');
    await this.page.click('[placeholder="день\\/месяц\\/год\\,\\ час\\:мин"]');
    await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
    await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
    await this.page.click('[aria-label="Choose\\ среда\\,\\ 1\\ декабря\\ 2021\\ г\\."]');
    await this.page.click('button:has-text("Установить")');
    await this.page.click('button:has-text("Применить")');
    await this.page.click('text=Остановка сервераworker-1qazvms-srv-1.qazvms.local1ЗакрытТревога27/12/2021, 16:5 >> button');
}

async journalnotificationsfilter() {
    await this.page.click('button:has-text("Журналы")');
    await this.page.click('text=Журнал уведомлений');
    // await this.page.click('text=В реальном времени');
    await this.page.click('div[role="button"]:has-text("Тревога")');
    await this.page.click('[placeholder="день\\/месяц\\/год\\,\\ час\\:мин"]');
    await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
    await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
    await this.page.click('[aria-label="Choose\\ среда\\,\\ 1\\ декабря\\ 2021\\ г\\."]');
    await this.page.click('button:has-text("Установить")');
    await this.page.click('button:has-text("Применить")');
    
}


async journaltaskopen() {
    await this.page.click('button:has-text("Журналы")');
    await this.page.click('text=Журнал заданий');
    // await this.page.click('text=В реальном времени');
    // await this.page.click('div[role="button"]:has-text("Тревога")');
    // await this.page.click('[placeholder="день\\/месяц\\/год\\,\\ час\\:мин"]');
    // await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
    // await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
    // await this.page.click('[aria-label="Choose\\ среда\\,\\ 1\\ декабря\\ 2021\\ г\\."]');
    // await this.page.click('button:has-text("Установить")');
    // await this.page.click('button:has-text("Применить")');

}
async journaltaskopenpackege() {
    await this.page.click('button:has-text("Журналы")');
    await this.page.click('text=Журнал заданий');
    await this.page.click('text=Пакетное добавление камер11/02/2022, 14:06:06Сайлаубеков Абылайхан Амандыковичal >> button');
    // await this.page.click('text=В реальном времени');
    // await this.page.click('div[role="button"]:has-text("Тревога")');
    // await this.page.click('[placeholder="день\\/месяц\\/год\\,\\ час\\:мин"]');
    // await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
    // await this.page.click('text=ЯнварьФевральМартАпрельМайИюньИюльАвгустСентябрьОктябрьНоябрьДекабрьпнвтсрчтптсб >> button');
    // await this.page.click('[aria-label="Choose\\ среда\\,\\ 1\\ декабря\\ 2021\\ г\\."]');
    // await this.page.click('button:has-text("Установить")');
    // await this.page.click('button:has-text("Применить")');

}
async journaltaskopenpackegefix() {
    await this.page.click('button:has-text("Журналы")');
    await this.page.click('text=Журнал заданий');
    await this.page.click('text=Пакетное добавление камер11/02/2022, 14:06:06Сайлаубеков Абылайхан Амандыковичal >> button');
    await this.page.click('button:has-text("Fix")');

}
async journaltaskopenpackegeptz() {
    await this.page.click('button:has-text("Журналы")');
    await this.page.click('text=Журнал заданий');
    await this.page.click('text=Пакетное добавление камер11/02/2022, 14:06:06Сайлаубеков Абылайхан Амандыковичal >> button');
    await this.page.click('button:has-text("ptz")');
    
}
async journalrulesopen() {
    await this.page.click('button:has-text("Журналы")');
    await this.page.click('text=Журнал правил');
    // await this.page.click('text=Пакетное добавление камер11/02/2022, 14:06:06Сайлаубеков Абылайхан Амандыковичal >> button');
    // await this.page.click('button:has-text("ptz")');
}    
 async createrules(text: string) {
    await this.page.click('button:has-text("Журналы")');
    await this.page.click('text=Журнал правил');
    await this.page.click('button:has-text("Создать правило")');
    await this.page.click('[placeholder="Выберите\\ организацию\\ из\\ списка"]');
    await this.page.click('text=Тест1');
    await this.page.click('[placeholder="Выберите\\ тип\\ уведомления"]')
    await this.page.click('li[role="option"]:has-text("Остановка сервера")');
    await this.page.click('text=ФункцияФункция >> [aria-label="Open"]');
    await this.page.click('p:has-text("Отправка сообщения на почту")');
    await this.page.click('text=Список получателейСписок получателей >> input[type="text"]');
    await this.page.click('p:has-text("Абылайхан Сайлаубеков")');
    await this.page.type('textarea', text);
    await this.page.click('button:has-text("Сохранить изменения")')

}    
async createrulesvalid(text: string) {
    await this.page.click('button:has-text("Журналы")');
    await this.page.click('text=Журнал правил');
    await this.page.click('button:has-text("Создать правило")');
 //    await this.page.click('[placeholder="Выберите\\ организацию\\ из\\ списка"]');
 //    await this.page.click('text=Тест1');
 //    await this.page.click('[placeholder="Выберите\\ тип\\ уведомления"]')
 //    await this.page.click('li[role="option"]:has-text("Остановка сервера")');
 //    await this.page.click('text=ФункцияФункция >> [aria-label="Open"]');
 //    await this.page.click('p:has-text("Отправка сообщения на почту")');
 //    await this.page.click('text=Список получателейСписок получателей >> input[type="text"]');
 //    await this.page.click('p:has-text("Абылайхан Сайлаубеков")');
 //    await this.page.type('textarea', text);
    await this.page.click('button:has-text("Сохранить изменения")');
 
 }  

async createrulesvalid1() {
   await this.page.click('button:has-text("Журналы")');
   await this.page.click('text=Журнал правил');
   await this.page.click('button:has-text("Создать правило")');
//    await this.page.click('[placeholder="Выберите\\ организацию\\ из\\ списка"]');
//    await this.page.click('text=Тест1');
//    await this.page.click('[placeholder="Выберите\\ тип\\ уведомления"]')
//    await this.page.click('li[role="option"]:has-text("Остановка сервера")');
//    await this.page.click('text=ФункцияФункция >> [aria-label="Open"]');
//    await this.page.click('p:has-text("Отправка сообщения на почту")');
//    await this.page.click('text=Список получателейСписок получателей >> input[type="text"]');
//    await this.page.click('p:has-text("Абылайхан Сайлаубеков")');
//    await this.page.type('textarea', text);
   await this.page.click('button:has-text("Сохранить изменения")');

}    
async createrulesvalid2(text: string) {
   await this.page.click('button:has-text("Журналы")');
   await this.page.click('text=Журнал правил');
   await this.page.click('button:has-text("Создать правило")');
   await this.page.click('[placeholder="Выберите\\ организацию\\ из\\ списка"]');
   await this.page.click('text=Тест1');
   await this.page.click('[placeholder="Выберите\\ тип\\ уведомления"]');
//    await this.page.click('li[role="option"]:has-text("Остановка сервера")');
//    await this.page.click('text=ФункцияФункция >> [aria-label="Open"]');
//    await this.page.click('p:has-text("Отправка сообщения на почту")');
//    await this.page.click('text=Список получателейСписок получателей >> input[type="text"]');
//    await this.page.click('p:has-text("Абылайхан Сайлаубеков")');
//    await this.page.type('textarea', text);
   await this.page.click('button:has-text("Сохранить изменения")');

}    
async createrulesvalid3(text: string) {
   await this.page.click('button:has-text("Журналы")');
   await this.page.click('text=Журнал правил');
   await this.page.click('button:has-text("Создать правило")');
   await this.page.click('[placeholder="Выберите\\ организацию\\ из\\ списка"]');
   await this.page.click('text=Тест1');
   await this.page.click('[placeholder="Выберите\\ тип\\ уведомления"]')
   await this.page.click('li[role="option"]:has-text("Остановка сервера")');
//    await this.page.click('text=ФункцияФункция >> [aria-label="Open"]');
//    await this.page.click('p:has-text("Отправка сообщения на почту")');
//    await this.page.click('text=Список получателейСписок получателей >> input[type="text"]');
//    await this.page.click('p:has-text("Абылайхан Сайлаубеков")');
//    await this.page.type('textarea', text);
   await this.page.click('button:has-text("Сохранить изменения")');

}    
async createrulesvalid4(text: string) {
   await this.page.click('button:has-text("Журналы")');
   await this.page.click('text=Журнал правил');
   await this.page.click('button:has-text("Создать правило")');
//    await this.page.click('[placeholder="Выберите\\ организацию\\ из\\ списка"]');
//    await this.page.click('text=Тест1');
   await this.page.click('[placeholder="Выберите\\ тип\\ уведомления"]')
   await this.page.click('li[role="option"]:has-text("Остановка сервера")');
   await this.page.click('text=ФункцияФункция >> [aria-label="Open"]');
   await this.page.click('p:has-text("Отправка сообщения на почту")');
   await this.page.click('text=Список получателейСписок получателей >> input[type="text"]');
   await this.page.click('p:has-text("Абылайхан Сайлаубеков")');
   await this.page.type('textarea', text);
   await this.page.click('button:has-text("Сохранить изменения")');

}    
async createrulesdelete() {
   await this.page.click('button:has-text("Журналы")');
   await this.page.click('text=Журнал правил');
   await this.page.click('text=Тест1Остановка сервераОтправка сообщения на почту >> button');
   await this.page.click(':nth-match(:text("Удалить"), 3)')

}

}