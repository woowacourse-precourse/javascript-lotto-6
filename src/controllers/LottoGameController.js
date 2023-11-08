import { LOTTO_SETTING } from '../constants/Setting.js';
import { Random } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import InputValidator from '../validators/InputValidator.js';
import OutputView from '../views/OutputView.js';
import Lotto from '../models/Lotto.js';

class LottoGameController {
  async startLottoGame() {
    const lottoList = await this.#getLotto();
    OutputView.outputLottoPurchaseAmount(lottoList);
  }

  async #getInputPrice() {
    while (true) {
      const price = await InputView.inputPrice();
      try {
        InputValidator.validateInputPrice(price);
        return price;
      } catch (error) {
        OutputView.outputMessage(error.message);
      }
    }
  }

  async #getLotto() {
    const purchasePrice = await this.#getInputPrice();
    const purchaseAmount = parseInt(purchasePrice / LOTTO_SETTING.pricePerLotto);
    return this.#generateLotto(purchaseAmount);
  }

  #generateLotto(amount) {
    const lottoList = [];
    for (let i = 0; i < amount; i += 1) {
      lottoList.push(
        new Lotto(
          Random.pickUniqueNumbersInRange(
            LOTTO_SETTING.minNumber,
            LOTTO_SETTING.maxNumber,
            LOTTO_SETTING.numbersLength,
          ),
        ),
      );
    }
    return lottoList;
  }
}

export default LottoGameController;
