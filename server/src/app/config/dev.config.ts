import { DB_PASSWORD } from './variate';

// 本地开发版
export default {
  mariadb: {
    host: 'localhost',
    user: 'root',
    password: DB_PASSWORD,
    database: 'koa-ts-full-stack-template-db'
  }
};
