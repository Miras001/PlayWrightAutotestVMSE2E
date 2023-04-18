import { test, expect } from '@playwright/test';
import { user } from '../../constants/userdata';
import { CVData } from '../../constants/testdata';
import { camera } from '../../constants/testdata';
import { formatDateTime } from "../../helpers/data.generator";
import * as faker from 'faker';

test("create-detection-crowd", async ({ request, baseURL, }) => {
  const now = new Date();
  const number = faker.datatype.number({min:1, max: 10});
  const isoDateTime = formatDateTime(now);
    const response = await request.post(`${baseURL}api/cvt/create-detection-crowd`, {
    
      
      data: {
        camera_host: camera.ip,
        crowd_average_count: number,
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

test("create-detection-io-lines", async ({ request, baseURL, }) => {
const now = new Date();
const number = faker.datatype.number({min:1, max: 10});
const isoDateTime = formatDateTime(now);
const response = await request.post(`${baseURL}api/cvt/create-detection-io-lines`, {


data: {
  camera_host: camera.ip,
  confidence: number,
  datetime: isoDateTime,
  image: {
      content:CVData.content,
      ext: CVData.ext
  },
  object_id: 0,
  type: 'car',
  violation: 'IO_LINES'

}});

    expect(response.status()).toBe(200);
    console.log(await response.json());

});

test("create-detection-io-lines-count", async ({ request, baseURL, }) => {
const now = new Date();
const isoDateTime = formatDateTime(now);
const response = await request.post(`${baseURL}api/cvt/create-detection-io-lines-count`, {

  
  data: {
    camera_host: camera.ip,
    control_line_count: 1,
    datetime: isoDateTime,
    type: 'car',
    violation: 'IO_LINES_COUNT'

}});

    expect(response.status()).toBe(200);
    console.log(await response.json());

});


test("create-detection-left-objects", async ({ request, baseURL, }) => {
const now = new Date();
const number = faker.datatype.number({min:1, max: 10});
const isoDateTime = formatDateTime(now);
const response = await request.post(`${baseURL}api/cvt/create-detection-left-objects`, {

  
  data: {
    camera_host: camera.ip,
    confidence: number,
    datetime: isoDateTime,
    duration:1,
    image: {
        content:CVData.content,
        ext: CVData.ext
    },
    object_id: 2,
    type: 'car',
    violation: 'LEFT_OBJECTS'

}});

    expect(response.status()).toBe(200);
    console.log(await response.json());

});
//todo refactor
test.skip("create-detection-prohibited-zones", async ({ request, baseURL, }) => {
  const now = new Date();
  const number = faker.datatype.number({min:1, max: 10});
  const isoDateTime = formatDateTime(now);
    const response = await request.post('${baseURL}api/cvt/create-detection-prohibited-zones', {
    
      
      data: {
        camera_host: camera.ip,
        confidence: number,
        datetime: isoDateTime,
        image: {
            content:CVData.content,
            ext: CVData.ext
        },
        object_id: 0,
        type: 'car',
        violation: 'PROHIBITED_ZONES'

}});
  
    expect(response.status()).toBe(200);
    console.log(await response.json());
    
  });


  test("get-calibration-params", async ({ request, baseURL, }) => {
    const response = await request.get(`${baseURL}api/cvt/get-calibration-params`, {
      
        data: {
          ip_address: camera.ip
          
  }});
    
    expect(response.status()).toBe(200);
    console.log(await response.json());
    
    });
