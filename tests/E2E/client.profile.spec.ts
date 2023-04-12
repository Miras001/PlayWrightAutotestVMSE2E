import { test, expect } from '@playwright/test';

import { user } from '../testdata';
import { HomePage } from '../../pages/client-home-page';
import { LoginPage } from '../../pages/client-login-page';
import { ProfilePage } from '../../pages/client-profile-page';
import { CameraPage } from '../../pages/client-camera-page';

test('Check User Profile', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiBox-root .MuiTypography-colorPrimary'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new ProfilePage(page).openProfile();
    await new ProfilePage(page).goToUserProfile();
    await expect(locator).toHaveText(['Личная информация','Доступ к организациям и объектам']);
    await page.reload();
    
    const [response] = await Promise.all([
      page.waitForResponse(res =>
        res.status()  == 200
        &&
        res.url() == "http://client.qazvms.local/api/users/profile"
        &&
        res.body().then(b => {
            console.log(b);
            return b.includes("m.orynbay@srgdev.kz")
            
        })
    ),
  ])
    
      console.log(await response.json());
  })

test('Check User Password', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator(''); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new ProfilePage(page).openProfile();
    await new ProfilePage(page).goToPassword();
    await page.reload();
    // const text = await page.getAttribute("class=col-8","value");
    // console.log(text);

    const [response] = await Promise.all([
      page.waitForResponse(res =>
        res.status()  == 200
        &&
        res.url() == "http://client.qazvms.local/api/users/profile"
        &&
        res.body().then(b => {
            console.log(b);
            return b.includes('passwordExpireDays')
        
        })
    ),
  ])
    
      console.log(await response.json());

    // const element = await page.$('.MuiTypography-h5.MuiTypography-colorPrimary');
    // await element.getAttribute('style');
    // const attr = await page.$eval('.MuiTypography-h5.MuiTypography-colorPrimary', el => el.style)

  });   

test('Check User rights and roles', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiTypography-subtitle2'); 
    const locatorRoles = page.locator('.MuiTypography-h6'); 

    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new ProfilePage(page).openProfile();
    await new ProfilePage(page).goToRightsAndRoles();
    await page.reload();
    // const text = await page.getAttribute("class=col-8","value");
    // console.log(text);

    const [response] = await Promise.all([
      page.waitForResponse(res =>
        res.status()  == 200
        &&
        res.url() == "http://client.qazvms.local/api/users/user-rights?currentUserId=3484"
        &&
        res.body().then(b => {
            console.log(b);
            return b.includes('access_rights');
        
        })
    ),
  ])
    
      console.log(await response.json());

    await expect(locator).toContainText(['Супер Администратор средний приоритет']);
    await expect(locatorRoles).toContainText(user.roles);
  });     

test.skip('Check User Activity', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator(''); 

    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new ProfilePage(page).openProfile();
    await new ProfilePage(page).goToActivity();
    await page.reload();
    const [response] = await Promise.all([
      page.waitForResponse(res =>
        res.status()  == 200
        &&
        res.url() == "http://client.qazvms.local/api/users/activity"
        &&
        res.body().then(b => {
            console.log(b);
            return b.includes('log_type_id');
        
        })
    ),
  ])
    
      console.log(await response.json());
  
  });    
 


