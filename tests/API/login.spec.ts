import { test, expect } from '@playwright/test';
import { user } from '../../constants/userdata';

interface LoginResponse {
  access_token: string;
}

test("login", async ({ request, baseURL, context }) => {

  const response = await request.post(`${baseURL}api/auth/login`, {
    data: {
      email: user.email,
      fingerprint: "string",
      password: user.password
    }
  });

  const responseJson = await response.json() as LoginResponse;
  const Token = responseJson.access_token;

  // сохраняем токен в контексте Playwright
  await context.exposeFunction('getToken', () => Token);

  console.log(Token);
});

test.skip("recover-set-password", async ({ request, baseURL, context }) => {

  const Token = await context.exposeFunction('getToken', () => {
    return 'Token';
  });
  
  const response = await request.post(`${baseURL}api/auth/recover-set-password`, {
    data: {
      email: user.testemail,
      token: Token,
      password: user.passwordtest
    }
  });

  expect(response.status()).toBe(200);
  console.log(await response.json());
});

test("recover-send-email", async ({ request, baseURL }) => {
  const response = await request.post(`${baseURL}api/auth/recover-send-email`, {
    data: {
      email: user.testemail,
    }
  });

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(await response.json());
});
