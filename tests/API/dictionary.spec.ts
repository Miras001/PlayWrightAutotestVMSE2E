import { user } from '../../constants/userdata';
import { test } from '@playwright/test';
import { login } from './.././../helpers/login';

const baseURL: string = 'http://admin.qazvms.local/';

let getTokenFunc: () => Promise<string>;

test.beforeEach(async ({ page }): Promise<void> => {
  const token: string = await login(page);

  // экспортируем функцию getToken в контекст страницы
  getTokenFunc = async (): Promise<string> => {
    return await page.evaluate(() => {
      return (window as any).getToken();
    });
  };
});

test("check detectionObjectType", async ({ page }): Promise<void> => {
  const token: string = await getTokenFunc();

  await page.setExtraHTTPHeaders({
    'Authorization': `Bearer ${token}`
  });

  const response = await page.goto(`${baseURL}api/dictionary/detectionObjectType`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (response) {
    expect(response).toBeTruthy();
    expect(response.status()).toBe(200);
  } else {
    // Обработка ошибки, если ответ от сервера не был получен
    console.error("No response from server");
  }
});
