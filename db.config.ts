import { test, expect } from '@playwright/test';

const db = new database({
    user: 'vms_user',
    host: '172.27.117.15',
    database: 'postgres',
    password: 'T9tPaeNLrFcR9QMa',
    port: 5432,
  });
