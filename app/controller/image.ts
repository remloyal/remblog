import { Controller } from "egg";
export default class image extends Controller {
  public async index() {
    const { ctx } = this;
    const { image } = ctx.app.config.allocation
    let rand = Math.floor(Math.random() * image.length);
    // ctx.logger.info('some request data: %j', ctx.request.body);
    // console.log(ctx.app.config.allocation);
    let rValue = image[rand];
    console.log('获取数据',rValue);
    try {
      const result = await ctx.curl(rValue,{
        method: 'get', // 设置请求方式 默认是GET
        // dataType: 'json',
        // contentType: 'json', // 默认是 form
      });
      result.headers.location ? rValue = result.headers.location : rValue ;
      console.log('获取图片数据',result.headers.location);
    } catch (error) {
      console.log(error);
      
    }
    
    ctx.body = {
      data:rValue,
      code:200
    };
  }
}
