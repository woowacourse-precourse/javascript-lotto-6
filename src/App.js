import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, INPUT_ERROR_MESSAGE } from './constants/constants';
import Lotto from './Lotto';

class App {
  #lottoCount;
  #lottoList = [];

  async play() {
    await this.#inputPurchaseAmount();
    this.#purchaseLottos();
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
    if (checkValidNumber % 1000 !== 0) {
      throw new Error(INPUT_ERROR_MESSAGE.PURCHASE_AMOUNT_ERROR);
    }
    this.#lottoCount = checkValidNumber / 1000;
  }

  #purchaseLottos() {
    for (let i = 0; i < this.#lottoCount; i++) {
      const randomNumbers = this.#getRandomNumbers();
      this.#lottoList.push(new Lotto(randomNumbers));
    }
  }

  #getRandomNumbers() {
    const randomNumbers = [];
    while (randomNumbers.length < 6) {
      const number = MissionUtils.Random.pickNumberInRange(1, 45);
      if (!randomNumbers.includes(String(number))) {
        randomNumbers.push(String(number));
      }
    }
    return randomNumbers;
  }
}

export default App;
