import { LOTTO_SETTING } from '../constants/Setting.js';
import { Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import InputValidator from '../validators/InputValidator.js';
import OutputView from '../views/OutputView.js';
import Lotto from '../models/Lotto.js';

class LottoGameController {
  async startLottoGame() {
    const price = await InputView.inputPrice();
    try {
      InputValidator.validateInputPrice(price);
      const lottoAmount = parseInt(price) / LOTTO_SETTING.pricePerLotto;
      const lotto = this.#generateLotto(lottoAmount);
      generate;
    } catch (error) {
      OutputView.outputMessage(error.message);
      this.startLottoGame();
      return;
    }
  }

  #generateLotto(amount) {
    const lotto = [];
    for (let i = 0; i < amount; i += 1) {
      lotto.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
    return lotto;
  }
}

export default LottoGameController;
