/* eslint-disable import/extensions */
/* eslint-disable no-constructor-return */
/* eslint-disable class-methods-use-this */
import createUser from '../@Service/createUser.js';
import generateLottoNumber from '../@Service/generateLottoNumber.js';
import ModelAndView from '../../Objects/ModelAndView.js';

class UserController {
  static instance = null;

  constructor() {
    if (!UserController.instance) {
      UserController.instance = this;
    }
    return UserController.instance;
  }

  requestMapping(purchaseAmount) {
    const modelAndView = new ModelAndView();
    const user = createUser(purchaseAmount, generateLottoNumber);
    modelAndView.setViewName('LottoPos');
    modelAndView.addObject('message', user.userLotto);
    return modelAndView;
  }
}

export default UserController;
