import { LOTTO_SETTING } from '../constants/Setting.js';
import InputView from '../views/InputView.js';
import InputValidator from '../validators/InputValidator.js';
import OutputView from '../views/OutputView.js';

class LottoGameController {
  async startLottoGame() {
    const price = await InputView.inputPrice();
    try {
      InputValidator.validateInputPrice(price);
      this.#generateLotto(parseInt(price) / LOTTO_SETTING.pricePerLotto);
    } catch (error) {
      OutputView.outputMessage(error.message);
      this.startLottoGame();
      return;
    }
  }

  #generateLotto(amount) {
    // TODO: 로또 생성 구현
  }
}

export default LottoGameController;
