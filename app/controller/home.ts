import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log(this.config);
    
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
