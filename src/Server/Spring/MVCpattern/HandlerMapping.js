/**
 * HandlerMapping 역할
 * HandlerMapping은 클라이언트 요청에 해당하는 컨트롤러를 찾고 해당 컨트롤러 정보를 다시 DispatcherServlet에게 응답합니다.
 */
import RESTFULAPI from '../../../Util/API.js';
import UserController from '../Annotation/@Controller/UserController.js';
import WinningLottoController from '../Annotation/@Controller/WinningLottoController.js';
import BonusController from '../Annotation/@Controller/BonusController.js';
import CompareLottoController from '../Annotation/@Controller/CompareLottoController.js';
import { ERROR_MESSAGE } from '../../../Util/Message.js';

class HandlerMapping {
  #userController;

  #winningLottoController;

  #bonusController;

  #compareLottoController;

  constructor() {
    this.#userController = new UserController();
    this.#winningLottoController = new WinningLottoController();
    this.#bonusController = new BonusController();
    this.#compareLottoController = new CompareLottoController();
  }

  get userController() {
    return this.#userController;
  }

  getController(url) {
    if (url === RESTFULAPI.purchaseAmount) return this.#userController;
    if (url === RESTFULAPI.setWinningNumber) return this.#winningLottoController;
    if (url === RESTFULAPI.setBonusNumber) return this.#bonusController;
    if (url === RESTFULAPI.compareLottoNumber) return this.#compareLottoController;
    throw ERROR_MESSAGE.isNotUrl;
  }
}

export default HandlerMapping;
