/* eslint-disable import/extensions */
/**
 * HandlerMapping 역할
 * HandlerMapping은 클라이언트 요청에 해당하는 컨트롤러를 찾고 해당 컨트롤러 정보를 다시 DispatcherServlet에게 응답합니다.
 */
import RESTFULAPI from '../../../Util/API.js';
import UserController from '../Annotation/@Controller/UserController.js';
import WinningLottoController from '../Annotation/@Controller/WinningLottoController.js';

class HandlerMapping {
  #userController;

  #winningLottoController;

  constructor() {
    this.#userController = new UserController();
    this.#winningLottoController = new WinningLottoController();
  }

  get userController() {
    return this.#userController;
  }

  getController(url) {
    if (url === RESTFULAPI.purchaseAmount) return this.#userController;
    if (url === RESTFULAPI.setWinningNumber) return this.#winningLottoController;
    return 0;
  }
}

export default HandlerMapping;
