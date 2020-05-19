'use strict';


//配置 ejs 模板引擎插件
// {app_root}/config/plugin.js
// exports.ejs = {
//   enable: true,
//   package: 'egg-view-ejs',
// };


/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  //配置 ejs 模板引擎插件
  ejs:{
    enable: true,
    package: 'egg-view-ejs',
  },
  // config/plugin.js
  mysql:{
    enable: true,
    package: 'egg-mysql',
  },

};
