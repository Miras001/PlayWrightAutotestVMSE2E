import { test, expect } from '@playwright/test';

import { user } from '../../constants/userdata';
import {camera} from '../../constants/testdata';

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

test("check get camera from id", async ({ request, baseURL, }) => {
    const token: string = await getTokenFunc();
  
    const response = await request.get(`${baseURL}api/camera/`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params:{
            id: camera.id
        }
    }
        );
  
      expect(response.status()).toBe(200);
      console.log(await response.json());
  });