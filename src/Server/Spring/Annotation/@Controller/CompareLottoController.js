import ModelAndView from '../../Objects/ModelAndView.js';
import { compareLotto, getProfitLotto } from '../@Service/compareLotto.js';

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
    const compareResult = compareLotto(userLotto.userLotto);
    const profit = ((getProfitLotto(compareResult) / userLotto.purchaseAmount) * 100).toFixed(1);
    const data = {
      compareResult,
      profit,
    };
    modelAndView.setViewName('LottoPos');
    modelAndView.addObject('data', data);
    return modelAndView;
  }
}

export default CompareLottoController;
