import { test, expect } from '@playwright/test';
import { organization, user, object, camera } from './testdata';
import { HomePage } from '../pages/admin-home-page';
import { LoginPage } from '../pages/admin-login-page';
import { ServerPage } from "../pages/admin-server-page";


//Проверить открытья раздела серверы
test('Open server', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new ServerPage(page).openServer()
    await expect(page).toHaveURL('http://admin.qazvms.local/organizations-objects/servers/*');
  });



//Проверить раскрытия дерево все серверы
test('Expand tree server', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new ServerPage(page).openServer();
    const [response] = await Promise.all([
        page.waitForResponse('**/api/camera?server_id=1&limit=200'),
       
      ]);

    
  });
