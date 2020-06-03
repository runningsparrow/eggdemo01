'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/makedoc', controller.home.makedoc);


  router.get('/newdoc', controller.newdoc.index);



  router.get('/guide', controller.guide.index);

  router.get('/news', controller.news.index);

  router.get('/newslist/:id', controller.news.newslist);



  router.get('/newscontent', controller.news.content);


  router.get('/script',controller.script.index)

};
