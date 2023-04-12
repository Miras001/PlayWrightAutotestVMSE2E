import { test, expect } from '@playwright/test';

import { user } from '../../constants/userdata';

test("info ptz control", async ({ request, baseURL, }) => {
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