/* eslint-disable import/extensions */
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
