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

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

  };

  return {
    ...config,
    ...userConfig,
  };
};
