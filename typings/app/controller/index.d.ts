// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportImage from '../../../app/controller/image';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    image: ExportImage;
  }
}
