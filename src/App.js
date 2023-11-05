import { Console } from '@woowacourse/mission-utils';
import { isValidLottoAmountInput } from './Utils/validation.js';
import InputView from './view/inputView.js';

class App {
  async play() {
    const lottoAmount = await this.getLottoAmount();
    const lottoCount = this.getLottoCount(lottoAmount);
  }

  async getLottoAmount() {
    let lottoAmount;

    while (true) {
      try {
        lottoAmount = await InputView.readLottoAmount();

        if (!isValidLottoAmountInput(lottoAmount)) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        } else {
          return lottoAmount;
        }
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  getLottoCount(amount) {
    return parseInt(amount / 1000);
  }
}

export default App;
