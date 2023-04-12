import { test, expect } from '@playwright/test';
import { user } from '../../constants/userdata';
import { CVData } from '../../constants/testdata';
import { camera } from '../../constants/testdata';

test("create-detection-crowd", async ({ request, baseURL, }) => {
    const response = await request.post(`${baseURL}api/cvt/create-detection-crowd`, {
      
      data: {
        camera_host: camera.ip,
        crowd_average_count: 1,
        datetime: "2023-04-12T15:59:10.000Z",
        image: {
            content:CVData.content,
            ext: CVData.ext
        },
        violation: 'CROWD'

}});
  
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(await response.json());
    //return 'access_token';
    //console.log(await response.json(), 'access_token');
    
  });