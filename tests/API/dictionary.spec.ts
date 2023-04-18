import { user } from '../../constants/userdata';
import { expect, test } from '@playwright/test';
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

test("check detectionObjectType", async ({ request, baseURL, }) => {
  const token: string = await getTokenFunc();

  const response = await request.post(`${baseURL}api/dictionary/detectionObjectType`, {
      headers: {
        Authorization: `Bearer ${token}`
      
      }});

    expect(response.status()).toBe(200);
    console.log(await response.json());
});

test("check detectionType", async ({ request, baseURL, }) => {
  const token: string = await getTokenFunc();

  const response = await request.post(`${baseURL}api/dictionary/detectionType`, {
      headers: {
        Authorization: `Bearer ${token}`
      
      }});

    expect(response.status()).toBe(200);
    console.log(await response.json());
});
