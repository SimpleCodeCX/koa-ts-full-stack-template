import devConfig from './dev.config';
import devServer from './dev-server.config';
import prodConfig from './prod.config';
import { normal } from '@lib/logger';
const logger = normal();

class GlobalConfig {
  config = {
    mariadb: devConfig.mariadb,
    isDev: /(^dev.*|^test.*)/.test(process.env.npm_lifecycle_event)
  };

  constructor() {
    this.getConfig();
  }

  getConfig() {
    switch (process.env.npm_lifecycle_event) {
      case 'dev': this.config = Object.assign(this.config, devConfig);
        break;
      case 'devServer': this.config = Object.assign(this.config, devServer);
        break;
      case 'prod': this.config = Object.assign(this.config, prodConfig);
        break;
      default: this.config = Object.assign(this.config, devConfig);
    }
    return this.config;
  }
}

const globalConfig = new GlobalConfig();
logger.info(globalConfig.config);

const GLOBAL_CONFIG = globalConfig.config;
export default GLOBAL_CONFIG;
