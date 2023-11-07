import View from '../views/View.js';
import * as utils from '../LottoUtils.js';
class MainController {
  async init() {
    const view = new View();
    const { amount, lottoCount } = await view.getLottoAmountCount();

    const lottos = utils.getLottos(lottoCount);
    view.setLottos(lottos);

    const { winningNumbers, bonusNumber } = await view.getLottoInput();
    const result = utils.getResult(lottos, winningNumbers, bonusNumber);
    const rateOfReturn = utils.getRateOfReturn(amount, result);
    view.setResult(result, rateOfReturn);
  }
}

export default MainController;
