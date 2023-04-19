import { test, expect } from '@playwright/test';

import { user } from '../../constants/userdata';


import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Добавляем данные в local storage
  await context.addInitScript(() => {
    localStorage.setItem('key', 'value');
  });

  const page = await context.newPage();
  await page.goto('https://example.com');

  // Получаем данные из local storage
  const value = await page.evaluate(() => {
    return localStorage.getItem('key');
  });

  console.log(value); // Выведет "value"

  await browser.close();
})();
