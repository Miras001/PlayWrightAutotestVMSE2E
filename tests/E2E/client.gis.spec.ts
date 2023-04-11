import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { OrganizationClient } from './testdata';
import { HomePage } from '../pages/client-home-page';
import { LoginPage } from '../pages/client-login-page';
import { ArchivePage } from '../pages/client-archive-page';
import { CameraPage } from '../pages/client-camera-page';
import { GISPage } from '../pages/client-gis-page';


//  test.beforeAll(async ({ page }) => {
//    const homepage = new HomePage(page);
//     await homepage.open();
//    await new LoginPage(page).login(user.email, user.password)
//  });

  test.only('Check expand tree', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiTreeView-root'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await homepage.gotoGIS();
    await new GISPage(page).openCameraTree();
    await new GISPage(page).searchInputFieldOrgName(OrganizationClient.titleObj);

    await expect(locator).toContainText(OrganizationClient.titleOrg);

      await expect(locator).toBeEnabled();
      await page.reload();
    
      const [response] = await Promise.all([
        page.waitForResponse(res =>
          res.status()  == 200
          &&
          res.url() == "http://client.qazvms.local/api/organizations/tree"
          &&
          res.body().then(b => {
              console.log(b);
              return b.includes('ORGANIZATION')
          
          })
      ),
    ])
    
    console.log(await response.json());
    });

    test('Check Search Organization by Name', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await homepage.gotoGIS();

      await new GISPage(page).openCameraTree();
      await new GISPage(page).searchInputFieldOrgName(OrganizationClient.titleObj);
  
      await expect(locator).toContainText(OrganizationClient.titleOrg);
      
    });   

    test.skip('Check Search Organization by BIN', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await homepage.gotoGIS();

      await new GISPage(page).openCameraTree();
      await new GISPage(page).searchInputFieldOrgBIN(OrganizationClient.binOrg);
  
      await expect(locator).toContainText(OrganizationClient.binOrg);
      
    });   
    test('Check Search Object by Name', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await homepage.gotoGIS();

      await new GISPage(page).openCameraTree();
      await new GISPage(page).searchInputFieldObjName(OrganizationClient.titleOrg);
  
      await expect(locator).toContainText(OrganizationClient.binObj);
      
    });   

    test.skip('Check Search Objct by BIN', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await homepage.gotoGIS();

      await new GISPage(page).openCameraTree();
      await new GISPage(page).searchInputFieldObjBIN(OrganizationClient.binObj);
  
      await expect(locator).toContainText(OrganizationClient.binObj);
      
    });   
    test('Check Search Camera by IP', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await homepage.gotoGIS();

      await new GISPage(page).openCameraTree();
      await new GISPage(page).searchInputFieldCamIP(OrganizationClient.camIP);
  
      await expect(locator).toContainText(OrganizationClient.camIP);
      
    });   

    test('Check Search Camera by Name', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await homepage.gotoGIS();

      await new GISPage(page).openCameraTree();
      await new GISPage(page).searchInputFieldCamName(OrganizationClient.camTitle);
  
      await expect(locator).toContainText(OrganizationClient.camTitle);
      
    });   

    test('Check Click Clear Search Field Button', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiInputBase-input'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await homepage.gotoGIS();

      await new GISPage(page).openCameraTree();
      await new GISPage(page).searchInputFieldOrgName(OrganizationClient.testText);
      await new GISPage(page).clearSearchField();
  
      await expect(locator).toBeEmpty();
      
    });   

    test('Check Search Camera by Filter', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.MuiTreeView-root'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await homepage.gotoGIS();

      await new GISPage(page).openCameraTree();
      await new GISPage(page).treeFilter();
      await new GISPage(page).filterOffBtn();

      await expect(locator).toContainText(OrganizationClient.offline);
      
    });   
   
    test('Check Layers Button on GIS Page', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator(".leaflet-control-layers-expanded"); 
      const camera = page.locator(".leaflet-interactive"); 

      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)

      await homepage.gotoGIS();
      await page.reload();
      await new GISPage(page).layersBtn();

      await new GISPage(page).objectCheckbox();
      await new GISPage(page).cameraCheckbox();

      await expect(locator).toBeVisible();
      await expect(camera).not.toBeVisible();

    });  

    test.only('Check City List on GIS Page', async ({ page }) => {
      const homepage = new HomePage(page);
      const city = page.locator(".MuiTypography-displayBlock"); 

      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)

      await homepage.gotoGIS();
      await page.reload();
      await new GISPage(page).cityListBtn();

      await expect(city).toHaveText('Астана');

      await page.screenshot({ path: 'page.png'});
      await page.screenshot({ path: 'page.png'});

    });  
