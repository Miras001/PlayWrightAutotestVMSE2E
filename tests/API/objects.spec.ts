import { test, expect } from '@playwright/test';
import { user } from '../../constants/userdata';
import { object } from '../../constants/testdata';
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

test("check get object from id", async ({ request, baseURL, }) => {
    const token: string = await getTokenFunc();
  
    const response = await request.get(`${baseURL}api/object/`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params:{
            id: object.id
        }
    }
        );
  
      expect(response.status()).toBe(200);
      console.log(await response.json());
  });
