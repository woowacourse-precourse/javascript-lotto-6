/* eslint-disable import/extensions */
/* eslint-disable no-constructor-return */
/* eslint-disable class-methods-use-this */
import ModelAndView from '../../Objects/ModelAndView.js';
import insertBonusLotto from '../@Service/insertBonusLotto.js';

class BonusController {
  static instance = null;

  constructor() {
    if (!BonusController.instance) {
      BonusController.instance = this;
    }
    return BonusController.instance;
  }

  requestMapping(bonusLotto) {
    const modelAndView = new ModelAndView();
    insertBonusLotto(bonusLotto);
    modelAndView.setViewName('LottoPos');
    modelAndView.addObject('data', null);
    return modelAndView;
  }
}

export default BonusController;
