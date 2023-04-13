import { test, expect } from '@playwright/test';
import { user } from '../../constants/userdata';
import { CVData } from '../../constants/testdata';
import { camera } from '../../constants/testdata';
import { formatDateTime } from "../../helpers/data.generator";

test("create-detection-crowd", async ({ request, baseURL, }) => {
  const now = new Date();
  const isoDateTime = formatDateTime(now);
    const response = await request.post(`${baseURL}api/cvt/create-detection-crowd`, {
      
      
      data: {
        camera_host: camera.ip,
        crowd_average_count: 1,
        datetime: isoDateTime,
        image: {
            content:CVData.content,
            ext: CVData.ext
        },
        violation: 'CROWD'

}});
  
    expect(response.status()).toBe(200);
    console.log(await response.json());
    
  });