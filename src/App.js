import { Console } from '@woowacourse/mission-utils';
import InputView from './view/inputView.js';

class App {
  async play() {
    const lottoAmount = await this.getLottoAmount();
  }

  async getLottoAmount() {
    let lottoAmount;

    while (true) {
      try {
        lottoAmount = await InputView.readLottoAmount();

        if (!this.isValidLottoAmountInput(lottoAmount)) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        } else {
          return lottoAmount;
        }
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
