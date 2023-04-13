import { test, expect } from '@playwright/test';
import { user } from '../../constants/userdata';
import { HomePage } from '../../pages/client-home-page';
import { LoginPage } from '../../pages/client-login-page';
import { CameraPage } from '../../pages/client-camera-page';


interface LoginResponse {
  access_token: string;
}


test("login", async ({ request, baseURL, }) => {
    const response = await request.post(`${baseURL}api/auth/login`, {
      
      data: {
        email: user.email,
        fingerprint: "string",
        password: user.password
      }
    });
  
    
    const responseJson = await response.json() as LoginResponse;
    const Token = responseJson.access_token;
  
    console.log(Token);
    
  });

  test("recover-send-email", async ({ request, baseURL, }) => {
    const response = await request.post(`${baseURL}api/auth/recover-send-email`, {
      
      data: {
        email: user.testemail,
      }
    });
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(await response.json());
    
  });

  
  test("recoveer-send-email", async ({ request, baseURL, }) => {
    const response = await request.post(`${baseURL}api/auth/recover-send-email`, {
      
      data: {
        email: user.testemail,
      }
    });
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(await response.json());
    
  });