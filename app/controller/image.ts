import { Controller } from "egg";
export default class image extends Controller {
  public async index() {
    const { ctx } = this;
    const { image } = ctx.app.config.allocation
    let rand = Math.floor(Math.random() * image.length);
    // ctx.logger.info('some request data: %j', ctx.request.body);
    // console.log(ctx.app.config.allocation);
    let rValue = image[rand];
    const result = await ctx.curl(rValue,{
      method: 'get', // 设置请求方式 默认是GET
      dataType: 'json',
      // contentType: 'json', // 默认是 form
    });
    console.log(result.headers.location);
    
    ctx.body = [rValue,result.headers.location];
  }
}
