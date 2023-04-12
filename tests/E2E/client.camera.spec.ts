import { test, expect } from '@playwright/test';

import { user } from '../testdata';
import { OrganizationClient } from '../testdata';
import { HomePage } from '../../pages/client-home-page';
import { LoginPage } from '../../pages/client-login-page';
import { ArchivePage } from '../../pages/client-archive-page';
import { CameraPage} from '../../pages/client-camera-page';

 // test.beforeAll(async ({ page }) => {
   // const homepage = new HomePage(page);
    //await homepage.open();
   // await new LoginPage(page).login(user.email, user.password)
 // });

    test('Click FullScreen', async ({ page }) => {
      const homepage = new HomePage(page);
      await homepage.open();
      const locator = page.locator('.MuiPaper-elevation1 > [tabindex]'); 
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).clickFullScreen()
      await expect(locator).toBeVisible();
    });

    test('Check Camera Icon', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.vms-camera-icon'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await expect(locator).toBeVisible();
    });   

    test('Check VMS Main Icon', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.vms-main-icon'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await expect(locator).toBeVisible();
    });     

    test('Check Create Grid', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).createGrid(user.testCamera);
      await expect(locator).toHaveText(['Сетка успешно добавлена!']);
    });    

    test.skip('Check Delete Grid', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).savedGrid()
      await new CameraPage(page).deleteGrid()
      await page.reload();

      const [response] = await Promise.all([
        page.waitForResponse(res =>
          res.status()  == 200
          &&
          res.url() == "http://client.qazvms.local/api/user/grid-preset"
          &&
          res.body().then(b => {
              console.log(b);
              return b.includes("m.orynbay@srgdev.kz")
          
          })
      ),
    ])
      
        console.log(await response.json());


    });

    test('Check Saved Grid', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)

      await new CameraPage(page).savedGrid()
      await page.reload();

      const [response] = await Promise.all([
        page.waitForResponse(res =>
          res.status()  == 200
          &&
          res.url() == "http://client.qazvms.local/api/user/grid-preset/list"
          &&
          res.body().then(b => {
              console.log(b);
              return b.includes('gridId')
          
          })
      ),
    ])
      
        console.log(await response.json());
    });

    test('Check Change Camera Optimal Grid', async ({ page }) => {

      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)

      await new CameraPage(page).changeCamera()
      await new CameraPage(page).openOptimalGrid()
      await page.reload();


      const [response] = await Promise.all([
        page.waitForResponse(res =>
          res.status()  == 200
          &&
          res.url() == "http://client.qazvms.local/api/users/cameras-grid"
          &&
          res.body().then(b => {
              console.log(b);
              return b.includes('gridIdentifier')
          
          })
      ),
    ])
      
        console.log(await response.json());
    });

    test.only('Check Change Camera Current Grid', async ({ page }) => {

      const homepage = new HomePage(page);
      const locator = page.locator('.MuiAlert-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)

      await new CameraPage(page).changeCamera()
      await new CameraPage(page).openCurrentGrid()
      await page.reload();

      page.on('websocket', ws => {
        console.log(`WebSocket opened: ${ws.url()}>`);
        ws.on('framesent', event => console.log(event.payload));
        ws.on('framereceived', event => console.log(event.payload));
        ws.on('close', () => console.log('WebSocket closed'));
      });

      const [response] = await Promise.all([
        page.waitForResponse(res =>
          res.status()  == 200
          &&
          res.url() == "http://client.qazvms.local/api/users/cameras-grid"
          &&
          res.body().then(b => {
              console.log(b);
              return b.includes('gridIdentifier')
          
          })
      ),
    ])
      
        console.log(await response.json());
    });


      // Поиск организаций по наименованию в дереве
    test('Check Organization by Name', async({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root');
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).openCameraTree();
      await new CameraPage(page).searchInputFieldOrgName(OrganizationClient.titleOrg);
      await expect(locator).toContainText(OrganizationClient.titleOrg);
    });  
    // Поиск организаций по бин в дереве
    test('Check Organization by bin', async({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root');
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).openCameraTree();
      await new CameraPage(page).searchInputFieldOrgBin(OrganizationClient.binOrg);
      await expect(locator).toContainText(OrganizationClient.binOrg);
    });  
    // Поиск объекта по наименованию в дереве
    test('Check Object by Name', async({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root');
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).openCameraTree();
      await new CameraPage(page).searchInputFieldObjName(OrganizationClient.titleObj);
      await expect(locator).toContainText(OrganizationClient.titleObj);
    });  
    // Поиск объекта по бин в дереве
    test('Check Object by bin', async({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root');
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).openCameraTree();
      await new CameraPage(page).searchInputFieldObjBin(OrganizationClient.binObj);
      await expect(locator).toContainText(OrganizationClient.binObj);
    });  
    // Поиск камер по наименованию в дереве
    test('Check Camera by name', async({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root');
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).openCameraTree();
      await new CameraPage(page).searchInputFieldCamName(OrganizationClient.camTitle);
      await expect(locator).toContainText(OrganizationClient.camTitle);
    });
    // Поиск камер по IP в дереве
    test('Check Camera by IP', async({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root');
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new CameraPage(page).openCameraTree();
      await new CameraPage(page).searchInputFieldCamIp(OrganizationClient.camIP);
      await expect(locator).toContainText(OrganizationClient.camIP);
    });

