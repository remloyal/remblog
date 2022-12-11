import { Controller } from "egg";
import config from "../../config";
export default class image extends Controller {
  public async index() {
    const { ctx } = this;
    let rand = Math.floor(Math.random() * config.image.length);
    let rValue = config.image[rand];
    ctx.body = rValue;
  }
}
