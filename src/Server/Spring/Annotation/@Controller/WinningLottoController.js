import ModelAndView from '../../Objects/ModelAndView.js';
import insertWinningLotto from '../@Service/insertWinningLotto.js';

class WinningLottoController {
  static instance = null;

  constructor() {
    if (!WinningLottoController.instance) {
      WinningLottoController.instance = this;
    }
    return WinningLottoController.instance;
  }

  requestMapping(winningLotto) {
    const modelAndView = new ModelAndView();
    insertWinningLotto(winningLotto);
    modelAndView.setViewName('LottoPos');
    modelAndView.addObject('data', null);
    return modelAndView;
  }
}

export default WinningLottoController;
