import app from './app.js';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import dbConfig from './app/config/dbconfig.js';
import pkg from 'pg';
import mongoose from 'mongoose';

dotenv.config({ path: './.env.local' });

const PORT = process.env.PORT || 5500;
const { Pool } = pkg;

const { user, host, database, password, dialect } = dbConfig;

/* 
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'shubham',
  password: 'helloworld',
  database: 'tracker'
});

(async function() {
  try {
    await pool.connect();
    console.log('Database connected successfully');
  } catch (err) {
    console.log(err);
  }
})(); */

/* const sequelizeConnection = new Sequelize('tracker', 'shubham', 'helloworld', {
  dialect: 'postgres',
  host: '127.0.0.1',
  pool: {
    max: 100,
    min: 0,
    idle: 200000,
    // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
    acquire: 1000000,
  }
});

(async function() {
  console.log('Database connection started');
  try {
    await sequelizeConnection.authenticate();
    console.log('Connected');
  } catch (err) {
    console.log('Getting some error while connecting to database', err);
  }j
})(); */
(async function() {
  console.log('Trying to connect to mongodb');
  try {
    await mongoose.connect('mongodb://root:root@0.0.0.0:27017/tracker');
    console.log('Database connection successfully');
  } catch (err) {
    console.log('Connection failed', err);
  }
})();

app.listen(PORT, () => {
  console.log(`App is running on port: http://localhost:${PORT}`);
});
