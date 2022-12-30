import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// import YAML from "yaml";
// import fs from "fs";
import configs from "../config";


export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;
  // var buffer = fs.readFileSync('config.yml', 'utf8');
  // var configes = YAML.parse(buffer);
  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1670514374639_9721';

  // add your egg config in here
  // console.log(configes);

  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['*'], // 配置白名单
  };
  config.cors = {
    // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许 Cookie 跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    allocation: configs
  };

  // console.log(config);
  config.sequelize = {
    dialect: 'mysql',
    host: '150.158.34.247',
    port: 3306,
    user: 'egg',
    password: 'egg',
    database: 'egg',
    default: {
      underscored: true,
      freezeTableName: true
    }
  };

  config.logger = {
    level: 'DEBUG',
    consoleLevel: 'DEBUG',
  };

  // config.customLogger = {
  //   xxLogger: {
  //     file: path.join(appInfo.root, 'logs/xx.log'),
  //     formatter:(meta)=> {
  //       return `[${meta.date}] ${meta.message}`;
  //     },
  //     // ctx logger
  //     contextFormatter:(meta)=> {
  //       return `[${meta.date}] [${meta.ctx.method} ${meta.ctx.url}] ${meta.message}`;
  //     },
  //   },
  // };
  // config.logger = {
  //   consoleLevel: 'DEBUG',
  //   // @ts-ignore
  //   contextFormatter: (meta: any) => {
  //     if (!meta) return '';
  //     const prefix = chalk.green(`[${meta.date}] [${meta.level}] [${meta.pid}]`);
  //     return prefix + ' ' + meta.message;
  //   },
  // }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
