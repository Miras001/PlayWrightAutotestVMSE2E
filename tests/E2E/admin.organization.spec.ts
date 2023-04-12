import { test, expect } from '@playwright/test';
import { orgparent, organization, user, object, camera } from '../testdata';
import { HomePage } from '../../pages/admin-home-page';
import { LoginPage } from '../../pages/admin-login-page';
import { OrganizationPage } from "../../pages/admin-organization-page";

//Проверить открытья окна создания головной организации
  test('Open create parent organization', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).openCreateparentOrganization()
    await expect(page).toHaveURL('http://admin.qazvms.local/organizations-objects/organizations/*');
  });

//Проверить создания головной организации
  test('Create parent organization', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.notification-message'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).createParentOrganization(orgparent.title, orgparent.bin)
    await expect(locator).toHaveText(['Данные сохранены']);
  });

//Проверить на валидацию поля "наименования"
  test('Create parent organization name', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createParentOrganizationname(orgparent.noValuetitle, orgparent.bin)
  await expect(locator).toHaveText(['Обязательно для заполнения','Обязательно для заполнения']);
});

//Проверить на валидацию поля "БИН"
  test('Create parent organization bin11', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createParentOrganizationbin11(orgparent.title, orgparent.bin11)
  await expect(locator).toHaveText(['Минимум 12 символов']);
});

//Проверить на валидацию поля "БИН"
test('Create parent organization bin13', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createParentOrganizationbin13(orgparent.title, orgparent.bin13)
  await expect(locator).toHaveText(['Максимум 12 символов']);
});

//Проверить создания организации
  test('Create organization', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.notification-message'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).createOrganization(organization.title, organization.bin)
    await expect(locator).toHaveText(['Данные сохранены']);
});

//Проверить на валидацию поля "наименования"
  test('Create organization name', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiFormHelperText-contained'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).createOrganizationname(orgparent.noValuetitle, orgparent.bin)
    await expect(locator).toHaveText(['Обязательно для заполнения','Обязательно для заполнения']);
});

//Проверить на валидацию поля "БИН"
  test('Create organization bin11', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiFormHelperText-contained'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).createOrganizationbin11(orgparent.title, orgparent.bin11)
    await expect(locator).toHaveText(['Минимум 12 символов']);
});
  
//Проверить на валидацию поля "БИН"
  test('Create organization bin13', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiFormHelperText-contained'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).createOrganizationbin13(orgparent.title, orgparent.bin13)
    await expect(locator).toHaveText(['Максимум 12 символов']);
});

//Проверить создания объекта
   test('Create object', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.notification-message'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).createObject(object.title)
    await expect(locator).toHaveText(['Данные сохранены']);
  });

//Проверить на валидацию поля "наименования"
  test('Create object name', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiFormHelperText-contained'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await new OrganizationPage(page).createObjectname()
    await expect(locator).toHaveText(['Обязательно для заполнения','Обязательно для заполнения']);
});  

//Проверить на валидацию поля "Группу"
test('Create object groupe', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('MuiFormHelperText-root'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createObjectgroupe(object.title)
  await expect(locator).toHaveText(['Обязательно для заполнения']);
});  

 //Проверить создания камеры
 test('Create camera', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.notification-message'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createcamera(camera.title, camera.login, camera.password, camera.ip, camera.port)
  await expect(locator).toHaveText(['Данные сохранены']);
});

 //Проверить валидацию наименования камеры
 test('Create name camera', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createnamecamera(camera.noValuetitle, camera.login, camera.password, camera.ip, camera.port)
  await expect(locator).toHaveText(['Обязательно для заполнения']);
});

 //Проверить валидацию модель камеры
 test('Create model camera', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createmodelcamera(camera.title, camera.login, camera.password, camera.ip, camera.port)
  await expect(locator).toHaveText(['Обязательно для заполнения']);
});

//Проверить валидацию логин,пароль,ip, порт камеры
test('Create ip,port,password,login camera', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createipportcamera(camera.title, camera.nologin, camera.nopassword, camera.noip, camera.noport)
  await expect(locator).toHaveText(['Обязательно для заполнения','Обязательно для заполнения','Обязательно для заполнения','Обязательно для заполнения']);
});

//Проверить валидацию сервер для подключения камеры
test('Create server camera', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('MuiFormHelperText-root'); 
  await homepage.open();
  await new LoginPage(page).login(user.email, user.password)
  await new OrganizationPage(page).createservertcamera(camera.title, camera.login, camera.password, camera.ip, camera.port)
  await expect(locator).toHaveText(['Обязательно для заполнения']);
});



  //Удалить камеру
    test('Delete camera', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.notification-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new OrganizationPage(page).deleteCamera();
      await expect(locator).toHaveText(['Данные сохранены']);
    });

  //Удалить объект
    test('Delete object', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.notification-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new OrganizationPage(page).deleteObject();
      await expect(locator).toHaveText(['Данные сохранены']);
    });

 //Удалить организацию 
 test('Delete organization', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.notification-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new OrganizationPage(page).deleteorganization()
      await expect(locator).toHaveText(['Данные сохранены']);
});


  //Удалить головную организацию 
    test('Delete parent organization', async ({ page }) => {
      const homepage = new HomePage(page);
      const locator = page.locator('.notification-message'); 
      await homepage.open();
      await new LoginPage(page).login(user.email, user.password)
      await new OrganizationPage(page).deleteparentorganization()
      await expect(locator).toHaveText(['Данные сохранены']);
    });