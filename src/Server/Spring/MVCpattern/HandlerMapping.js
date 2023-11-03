/* eslint-disable import/extensions */
/**
 * HandlerMapping 역할
 * HandlerMapping은 클라이언트 요청에 해당하는 컨트롤러를 찾고 해당 컨트롤러 정보를 다시 DispatcherServlet에게 응답합니다.
 */
import RESTFULAPI from '../../../Util/API.js';
import UserController from '../Annotation/@Controller/UserController.js';

class HandlerMapping {
  #userController;

  constructor() {
    this.#userController = new UserController();
  }

  get userController() {
    return this.#userController;
  }

  getController(url) {
    if (url === RESTFULAPI.purchaseAmount) return this.userController;
    return 0;
  }
}

export default HandlerMapping;
