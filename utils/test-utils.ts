/*import { Page, Cookie } from '@playwright/test';

export interface MyTestContext {
  page: Page;
  mySet(key: string, value: any): Promise<void>;
  myGet(key: string): Promise<any>;
}

export const mySet = async (context: MyTestContext, key: string, value: any) => {
  const cookie: Cookie = { name: key, value: JSON.stringify(value) };
  await context.page.addCookies([cookie]);
};

export const myGet = async (context: MyTestContext, key: string) => {
  const cookies = await context.page.cookies();
  const cookie = cookies.find((c) => c.name === key);
  if (!cookie) {
    throw new Error(`Cookie with name ${key} not found`);
  }
  return JSON.parse(cookie.value);
};
/*