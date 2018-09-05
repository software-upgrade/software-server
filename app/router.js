'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

// app/router.js
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.post('/upload', controller.upload.create);
  router.get('/download-center', controller.download.index);
  router.get('/download', controller.download.download);
  router.get('/download-image', controller.download.downloadImage);
  router.resources('user', '/users', controller.user);
  router.resources('role', '/roles', controller.role);
  router.resources('acl', '/acls', controller.acl);
  router.resources('role_user', '/role.do', controller.role_user);
  router.resources('role_acl', '/acl.do', controller.role_acl);
  router.post('/login', controller.login.login);
};
