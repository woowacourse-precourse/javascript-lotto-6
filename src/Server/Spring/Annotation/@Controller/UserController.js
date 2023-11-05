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
    modelAndView.addObject('data', user);
    return modelAndView;
  }
}

export default UserController;
