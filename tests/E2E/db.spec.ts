import { test, expect } from '@playwright/test';
import { Servers } from '../../constants/dbdata';
import { Client } from 'pg';

test('PostgreSQL connection test', async () => {
  const client = new Client({
    user: 'vms_user',
    host: '172.27.117.15',
    database: 'vms_db',
    password: 'T9tPaeNLrFcR9QMa',
    port: 5432,
  });

  await client.connect();

  const result = await client.query('SELECT * FROM core."Servers"');
  result.rows.forEach(row => {
    console.log(row.Name);
  });

  result.rows.forEach(row => {
    expect(Servers.name).toContain(row.Name);
  });

});