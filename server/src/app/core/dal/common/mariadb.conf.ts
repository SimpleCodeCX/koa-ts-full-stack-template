import GLOBAL_CONFIG from '../../../config/system.config';

export default {
  host: GLOBAL_CONFIG.mariadb.host,
  user: GLOBAL_CONFIG.mariadb.user,
  password: GLOBAL_CONFIG.mariadb.password,
  database: GLOBAL_CONFIG.mariadb.database,
  dateStrings: true
};
