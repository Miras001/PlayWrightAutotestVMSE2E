import { test, expect } from '@playwright/test';

import { user } from './testdata';
import { HomePage } from '../pages/client-home-page';
import { LoginPage } from '../pages/client-login-page';
import { CameraPage } from '../pages/client-camera-page';
import {ArchivePage} from '../pages/client-archive-page';

test('User can login correct data', async ({ page }) => {
    const homepage = new HomePage(page);
    
    await homepage.open();
    await new LoginPage(page).login(user.email, user.password)
    await expect(page).toHaveURL('http://client.qazvms.local/dashboard');

  });

  

  
  
  
