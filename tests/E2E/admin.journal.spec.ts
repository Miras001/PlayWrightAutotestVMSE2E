import { test, expect } from '@playwright/test';
import { orgparent, organization, user, object, camera, rules } from './testdata';
import { HomePage } from '../pages/admin-home-page';
import { LoginPage } from '../pages/admin-login-page';
import { JournalPage } from "../pages/admin-journal-page";


//Проверить переход в журнал
  test('Open journal', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new JournalPage(page).openjournal()
    await expect(page).toHaveURL('http://admin.qazvms.local/journal/logs?filter=%7B%7D');
  });

  //Проверить переход в журнал уведомлении
  test('Open journal notifications', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new JournalPage(page).openjournalnotifications()
    await expect(page).toHaveURL('http://admin.qazvms.local/journal/notifications');
  });

    //Проверить переход в журнал заданий
    test('Open journal tasks', async ({ page }) => {
        const homepage = new HomePage(page);
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).openjournaltasks()
        await expect(page).toHaveURL('http://admin.qazvms.local/journal/tasks?filter_tasks=%7B%22limit%22%3A10%2C%22offset%22%3A0%7D');
      });

    //Проверить переход в журнал правил
    test('Open journal rules', async ({ page }) => {
        const homepage = new HomePage(page);
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).openjournalrules()
        await expect(page).toHaveURL('http://admin.qazvms.local/journal/reaction-rules?filter_response_rules=%7B%22limit%22%3A10%2C%22offset%22%3A0%7D');
      });

    //Проверить переход в журнал логов
    test('Open journal logs', async ({ page }) => {
        const homepage = new HomePage(page);
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).openjournallogs()
        await expect(page).toHaveURL('http://admin.qazvms.local/journal/logs');
      });

    //Журнал логов: проверить переход в Действия
    test('Open journal actions ', async ({ page }) => {
        const homepage = new HomePage(page);
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).openjournalactions()
        await expect(page).toHaveURL('http://admin.qazvms.local/journal/logs?filter=%7B%7D');
      });

    //Журнал логов: проверить переход в Действия
    test('Open journal users ', async ({ page }) => {
        const homepage = new HomePage(page);
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).openjournalusers()
        await expect(page).toHaveURL('http://admin.qazvms.local/journal/logs?filter=%7B%7D');
      });

       //Журнал логов: проверить логирования организации в реальном времени
    test('Journal logs org ', async ({ page }) => {
        const homepage = new HomePage(page);
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).journallogsorg()
        const [response] = await Promise.all([
            page.waitForResponse('**/api/log?limit=50&offset=0&realTime=true'),
        ]);
     });

       //Журнал логов: проверить логирования действия в реальном времени
       test('Journal logs actions ', async ({ page }) => {
        const homepage = new HomePage(page);
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).journallogsactions()
        const [response] = await Promise.all([
            page.waitForResponse('**/api/log?limit=50&offset=0&realTime=true'),
           
        ]);
    });

       //Журнал логов: проверить логирования пользователей в реальном времени
       test('Journal logs users ', async ({ page }) => {
        const homepage = new HomePage(page);
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).journallogsusers()
        const [response] = await Promise.all([
            page.waitForResponse('**/api/log?limit=50&offset=0&realTime=true'),
           
        ]);
    });

       //Журнал логов: проверить логирования организации за определенный период
       test('Journal logs org period ', async ({ page }) => {
        const homepage = new HomePage(page);
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).journallogsorgperiod()
        const [response] = await Promise.all([
            page.waitForResponse('**/api/log?limit=50&offset=0&realTime=false&created_from=1643565600&created_to=1644947940'),
           
        ]);
    });

 //Журнал логов: проверить логирования действия за определенный период
    test('Journal logs actions period ', async ({ page }) => {
     const homepage = new HomePage(page);
            await homepage.open();
            await new LoginPage(page).login(user.email, user.password)
            await new JournalPage(page).journallogsactionsperiod()
            const [response] = await Promise.all([
                page.waitForResponse('**/api/log?limit=50&offset=0&realTime=false&created_from=1643565600&created_to=1644947940'),
               
     ]);
 });

  //Журнал логов: проверить логирования юзеров за определенный период
  test('Journal logs users period ', async ({ page }) => {
    const homepage = new HomePage(page);
           await homepage.open();
           await new LoginPage(page).login(user.email, user.password)
           await new JournalPage(page).journallogsuserssperiod()
           const [response] = await Promise.all([
               page.waitForResponse('**/api/log?limit=50&offset=0&realTime=false&created_from=1643565600&created_to=1644947940'),
              
    ]);
});

//проверить переход в журнал уведомлении 
 test('Journal notifications ', async ({ page }) => {
    const homepage = new HomePage(page);
           await homepage.open();
           await new LoginPage(page).login(user.email, user.password)
           await new JournalPage(page).journalnotifications()
           const [response] = await Promise.all([
               page.waitForResponse('**/api/notification?limit=50&offset=0&search_text=&is_real_time=true&with_set_is_read=true'),
              
    ]);
});


 //Журнал логов: проверить логирования уведомлении в реальном времени
 test('Journal notifications ', async ({ page }) => {
    const homepage = new HomePage(page);
           await homepage.open();
           await new LoginPage(page).login(user.email, user.password)
           await new JournalPage(page).journalnotifications()
           const [response] = await Promise.all([
               page.waitForResponse('**/api/notification?limit=50&offset=0&search_text=&is_real_time=true&with_set_is_read=true'),
              
    ]);
});

 //Журнал уведеомлении: проверить логирования уведомлении  за определенный период
 test('Journal notifications period ', async ({ page }) => {
    const homepage = new HomePage(page);
           await homepage.open();
           await new LoginPage(page).login(user.email, user.password)
           await new JournalPage(page).journalnotificationsperiod()
           const [response] = await Promise.all([
               page.waitForResponse('**/api/notification?limit=50&offset=0&search_text=&is_real_time=false&created_from=1638295200&created_to=1645034340&with_set_is_read=true'),
              
    ]);
});

 //Журнал уведеомлении:  проверить логирования уведомлении 
 test('Journal notifications open', async ({ page }) => {
    const homepage = new HomePage(page);
           await homepage.open();
           await new LoginPage(page).login(user.email, user.password)
           await new JournalPage(page).journalnotificationsopen()
           const [response] = await Promise.all([
               page.waitForResponse('**/api/notification?limit=50&offset=0&search_text=&is_real_time=false&created_from=1638295200&created_to=1645034340&with_set_is_read=true'),
              
    ]);
});

//Журнал заданий:  проверить открытия заданй
test('Journal task open', async ({ page }) => {
    const homepage = new HomePage(page);
           await homepage.open();
           await new LoginPage(page).login(user.email, user.password)
           await new JournalPage(page).journaltaskopen()
           const [response] = await Promise.all([
               page.waitForResponse('**/api/camera-task?limit=10&offset=0'),
              
    ]);
});
    
//Журнал заданий: проверить открытия задания пакетного добавления
test('Journal task packege', async ({ page }) => {
    const homepage = new HomePage(page);
           await homepage.open();
           await new LoginPage(page).login(user.email, user.password)
           await new JournalPage(page).journaltaskopenpackege()
           const [response] = await Promise.all([
               page.waitForResponse('**/api/camera-task-detail/camera-task/129?limit=10&offset=0'),
              
    ]);
});

//Журнал заданий: проверить задание пакетного добавление на фильтрацию камер FIX
test('Journal task packege fix', async ({ page }) => {
    const homepage = new HomePage(page);
           await homepage.open();
           await new LoginPage(page).login(user.email, user.password)
           await new JournalPage(page).journaltaskopenpackegefix()
           const [response] = await Promise.all([
               page.waitForResponse('**/api/camera-task-detail/camera-task/129?limit=10&offset=0&camera_type=fix'),
              
    ]);
});

//Журнал заданий:проверить задание пакетного добавление на фильтрацию камер PTZ
test('Journal task packege ptz', async ({ page }) => {
    const homepage = new HomePage(page);
           await homepage.open();
           await new LoginPage(page).login(user.email, user.password)
           await new JournalPage(page).journaltaskopenpackegeptz()
           const [response] = await Promise.all([
               page.waitForResponse('**/api/camera-task-detail/camera-task/129?limit=10&offset=0&camera_type=ptz'),
              
    ]);
});
    
 //Журнал правил:проверить переход в журнал правил
test('Journal rules open', async ({ page }) => {
    const homepage = new HomePage(page);
           await homepage.open();
           await new LoginPage(page).login(user.email, user.password)
           await new JournalPage(page).journalrulesopen()
           const [response] = await Promise.all([
               page.waitForResponse('**/api/response-rule?limit=10&offset=0'),
              
    ]);
});   

//Журнал правил:проверить создание правил
  test('Create journal rules', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('notification-message'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new JournalPage(page).createrules(rules.text)
    await expect(locator).toHaveText(['Правило успешно создано']);
  });
    
  //Журнал правил:проверить валидацию полей
  test('Create journal rules valid', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.Mui-error'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new JournalPage(page).createrulesvalid1()
    await expect(locator).toHaveText(['Обязательно для заполнения','Обязательно для заполнения','Обязательно для заполнения']);
  });
      
  //Журнал правил:проверить валидацию полей "Тип уведомления", "Тип реагирования"
    test('Create journal rules valid2', async ({ page }) => {
        const homepage = new HomePage(page);
        const locator = page.locator('.Mui-error'); 
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).createrulesvalid2(rules.text)
        await expect(locator).toHaveText(['Обязательно для заполнения','Обязательно для заполнения']);
      });

       //Журнал правил:проверить валидацию полей "Тип реагирования"
    test('Create journal rules valid3', async ({ page }) => {
        const homepage = new HomePage(page);
        const locator = page.locator('.Mui-error'); 
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).createrulesvalid3(rules.text)
        await expect(locator).toHaveText(['Обязательно для заполнения']);
      });
      
         //Журнал правил:проверить валидацию полей "Тип реагирования"
    test('Create journal rules valid4', async ({ page }) => {
        const homepage = new HomePage(page);
        const locator = page.locator('.Mui-error'); 
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).createrulesvalid4(rules.text)
        await expect(locator).toHaveText(['Обязательно для заполнения']);
      });
      
            //Журнал правил:проверить удаление правил"
    test('Create journal rules delete', async ({ page }) => {
        const homepage = new HomePage(page);
        const locator = page.locator('notification-message'); 
        await homepage.open();
        await new LoginPage(page).login(user.email, user.password)
        await new JournalPage(page).createrulesdelete()
        await expect(locator).toHaveText(['Правило успешно удалено']);
      });