import { test, expect } from '@playwright/test';

import { user } from '../../constants/userdata';
import { HomePage } from '../../pages/client-home-page';
import { LoginPage } from '../../pages/client-login-page';
import { CameraPage } from '../../pages/client-camera-page';

test("login", async ({ request, baseURL, }) => {
    const response = await request.post(`${baseURL}api/auth/login`, {
      
      data: {
        email: user.email,
        fingerprint: "string",
        password: user.password
      }
    });
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(await response.json());
    //return 'access_token';
    //console.log(await response.json(), 'access_token');
    
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