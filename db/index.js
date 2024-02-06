'use strict';

const { Pool } = require('pg');

require('dotenv').config();

const { PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT } = process.env;

const pool = new Pool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: true,
});

module.exports = pool;
