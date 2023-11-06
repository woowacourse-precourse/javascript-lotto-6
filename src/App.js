import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, INPUT_ERROR_MESSAGE } from './constants/constants';

class App {
  #lottoCount;
  #lottoList = [];

  async play() {
    await this.#inputPurchaseAmount();
  }

  async #inputPurchaseAmount() {
    Console.print(INPUT_MESSAGE.PURCHASING_AMOUNT);
    const purchasingAmount = await Console.readLineAsync('');
    this.#validatePurchasingAmount(purchasingAmount);
  }

  #validatePurchasingAmount(amount) {
    const checkValidNumber = Number(amount);

    if (isNaN(checkValidNumber)) {
      throw new Error(INPUT_ERROR_MESSAGE.NUMBER_ERROR);
    }
    if (checkValidNumber) {
      throw new Error(INPUT_ERROR_MESSAGE.PURCHASE_AMOUNT_ERROR);
    }
    this.#lottoCount = checkValidNumber / 1000;
  }
}

export default App;
