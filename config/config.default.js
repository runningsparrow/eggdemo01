/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588994900878_7487';

  // add your middleware config here
  config.middleware = [];


  //配置ejs模板引擎

  config.view = {
    mapping: {
      // '.ejs': 'ejs',
      //改成使用ejs 来解析 html
      '.html': 'ejs',
    },
  };

  // config/config.${env}.js
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '39.99.168.212',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'wzkj2015',
      // 数据库名
      database: 'test1',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };



  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

  };

  return {
    ...config,
    ...userConfig,
  };
};