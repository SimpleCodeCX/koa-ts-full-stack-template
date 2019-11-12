import { MARIADBPWD } from './variate';

// 本地开发版
export default {
  mariadb: {
    host: 'localhost',
    user: 'root',
    password: MARIADBPWD,
    database: 'koa-ts-full-stack-template-db'
  }
};
