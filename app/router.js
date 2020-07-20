'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/makedoc', controller.home.makedoc);

  router.post('/queryone', controller.home.queryone);

  router.post('/updateone', controller.home.updateone);

  router.post('/deletedoc', controller.home.deletedoc);

  router.post('/downloadout',controller.home.downloadout)
  // router.get('/downloadout',controller.home.downloadout)


  router.get('/newdoc', controller.newdoc.index);

  router.post('/insertonedoc', controller.newdoc.insertonedoc);

  router.get('/upfile', controller.upfile.index);

  router.post('/fileupload', controller.upfile.fileupload);

  router.post('/filecheck', controller.upfile.filecheck);

  router.post('/dirbuild', controller.upfile.dirbuild); 

  router.post('/clearfile', controller.upfile.clearfile); 

  



  router.get('/guide', controller.guide.index);

  router.get('/news', controller.news.index);

  router.get('/newslist/:id', controller.news.newslist);



  router.get('/newscontent', controller.news.content);


  router.get('/script',controller.script.index)

};
