import { Application } from 'egg';


export default (app: Application) => {
  const { controller, router } = app;  
  router.get('/', controller.home.index);
  router.get('/img', controller.image.index);
  router.resources('users', '/users', controller.users);
};
