/* eslint-disable import/extensions */
/* eslint-disable no-constructor-return */
/* eslint-disable class-methods-use-this */
import ModelAndView from '../../Objects/ModelAndView.js';
import compareLotto from '../@Service/compareLotto.js';

class CompareLottoController {
  static instance = null;

  constructor() {
    if (!CompareLottoController.instance) {
      CompareLottoController.instance = this;
    }
    return CompareLottoController.instance;
  }

  requestMapping(userLotto) {
    const modelAndView = new ModelAndView();
    const compareResult = compareLotto(userLotto);
    const data = {
      compareResult,
      avg: 35,
    };
    modelAndView.setViewName('LottoPos');
    modelAndView.addObject('data', data);
    return modelAndView;
  }
}

export default CompareLottoController;
