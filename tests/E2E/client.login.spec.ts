import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/client-home-page';
import { LoginPage } from '../pages/client-login-page';
import { CameraPage } from '../pages/client-camera-page';

// Авторизация с корректным e-mail-ом и паролем
test('User can login correct data', async ({ page }) => {
    const homepage = new HomePage(page);
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await expect(page).toHaveURL('http://client.qazvms.local/dashboard');

  });
//Авторизация существующего пользователя с некорректным email
test('User can login incorrect email', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiTypography-colorError'); 
    await homepage.open();
    await new LoginPage(page).login(user.incorrectemail, user.incorrectpassword)
    await expect(locator).toHaveText(['Введите правильный e-mail']);

  });
//Авторизация существующего пользователя с некорректным паролем
test('User can login incorrect password', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiTypography-colorError'); 
    await homepage.open();
    await new LoginPage(page).login(user.email, user.incorrectpassword)
    await expect(locator).toHaveText(['Логин или пароль введен неверно, пожалуйста, проверьте данные или обратитесь к администратору']);

  });
//Некорректный логин и пароль
test('User can login incorrect login and password', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-colorError'); 
  await homepage.open();
  await new LoginPage(page).login(user.incorrectemail, user.incorrectpassword)
  await expect(locator).toHaveText(['Логин или пароль введен неверно, пожалуйста, проверьте данные или обратитесь к администратору']);

});
// Кнопка восстановить пароль
test('Restore password1', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiTypography-h6'); 
    await homepage.open();
    await new LoginPage(page).restorePassword(user.testemail)
    await expect(locator).toHaveText(['xwkogypfnfztqalfyz@bvhrk.com']);

  });  
//Удаленный пользователь
test('Delete user', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-displayBlock'); 
  await homepage.open();
  await new LoginPage(page).deletedUser(user.deletedemail, user.deletedpassword)
  await expect(locator).toHaveText(['Ваша учетная запись удалена и не может быть использована']);

}); 
//Заблокированный пользователь
test('Blocked User', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-displayBlock'); 
  await homepage.open();
  await new LoginPage(page).blockedUser(user.blockedemail, user.blockedpassword)
  await expect(locator).toHaveText(['Ваша учетная запись заблокирована и не может быть использована, обратитесь к администратору']);

});  
//Авторизация без данных
  test('No value', async ({ page }) => {
    const homepage = new HomePage(page);
    const locator = page.locator('.MuiFormHelperText-contained'); 
    await homepage.open();
    await new LoginPage(page).noValue(user.noValueemail, user.noValuepass)
    await expect(locator).toHaveText(['Обязательно для заполнения','Пароль должен содержать минимум 8 символов']);

  });
//Email кириллица  
test('Cyrillic email', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).сyrillicEmail(user.cyrillicemail, user.password)
  await expect(locator).toHaveText(['E-mail введен неверно']);
});
//Email набор спец.символов 
test('Special symbols email', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).specialSymbolsemail(user.specsymbolemail, user.password)
  await expect(locator).toHaveText(['E-mail введен неверно']);

}); 
//Email без знака "@"
test('Symbols email', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).symbolsEmail(user.symbolemail, user.password)
  await expect(locator).toHaveText(['E-mail введен неверно']);

}); 
//Email без доменной части
test('Email without domain', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).emailwithoutdomain(user.emailnotdomain, user.password)
  await expect(locator).toHaveText(['E-mail введен неверно']);

}); 
//Email доступными символами «.», «_», «-»:
test('Email available characters', async ({ page }) => {
  const homepage = new HomePage(page);
  await homepage.open();
  await new LoginPage(page).emailAvailableCharacters(user.adminemail, user.adminpassword)
  await expect(page).toHaveURL('http://admin.qazvms.local/login');

}); 
//Проверка пароля на кириллицу 
test('Password cyrillic', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-displayBlock'); 
  await homepage.open();
  await new LoginPage(page).passwordCyrillic(user.adminemail, user.passwordcyrillic)
  await expect(locator).toHaveText(['Логин или пароль введен неверно, пожалуйста, проверьте данные или обратитесь к администратору']);

}); 
//Проверка пароля на латиницу
test('Password latin', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-displayBlock'); 
  await homepage.open();
  await new LoginPage(page).passwordLatin(user.adminemail, user.passwordlatin)
  await expect(locator).toHaveText(['Логин или пароль введен неверно, пожалуйста, проверьте данные или обратитесь к администратору']);

}); 
//Проверка пароля на спец.символы
test('Password special symbols', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiTypography-displayBlock'); 
  await homepage.open();
  await new LoginPage(page).passwordspecialsymbols(user.email, user.passwordspecsymbol)
  await expect(locator).toHaveText(['Логин или пароль введен неверно, пожалуйста, проверьте данные или обратитесь к администратору']);

}); 
//Проверка пароля на пустое поле
test('No value password', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).novaluePassword(user.adminemail, user.noValuepass)
  await expect(locator).toHaveText(['Обязательно для заполнения']);

}); 
//Восстановление пароля email оставить пустым
test('Restore password no value email', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).restorePasswordnovalue(user.noValueemail)
  await expect(locator).toHaveText(['Обязательно для заполнения']);

});  
//Восстановление пароля email без домена
test('Restore password email without domain', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).restorePasswordemailwithoutdomain(user.emailnotdomain)
  await expect(locator).toHaveText(['E-mail введен неверно']);

}); 
//Восстановление пароля email набор букв кириллицы
test('Restore password email cyrillic', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).restorePasswordemailcyrillic(user.cyrillicemail)
  await expect(locator).toHaveText(['E-mail введен неверно']);

}); 
//Восстановление пароля email набор цифр
test('Restore password email number', async ({ page }) => {
  const homepage = new HomePage(page);
  const locator = page.locator('.MuiFormHelperText-contained'); 
  await homepage.open();
  await new LoginPage(page).restorePasswordemailnumber(user.emailnumber)
  await expect(locator).toHaveText(['E-mail введен неверно']);

}); 