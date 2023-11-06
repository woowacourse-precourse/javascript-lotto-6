import { MissionUtils, Console } from '@woowacourse/mission-utils';
import {
  INPUT_MESSAGE,
  INPUT_ERROR_MESSAGE,
  SYMBOL,
} from './constants/constants';
import Lotto from './Lotto';

class App {
  #lottoCount;
  #lottoList = [];
  #winningNumbers = [];

  async play() {
    await this.#inputPurchaseAmount();
    this.#purchaseLottos();
    this.#printAllLottos();
    await this.#inputWinningNumbers();
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
    const sortRandomNumbers = randomNumbers.sort((a, b) => a - b);
    return sortRandomNumbers;
  }

  #printAllLottos() {
    Console.print(`${this.#lottoList.length}${INPUT_MESSAGE.PURCHASE_LOTTO}`);
    this.#lottoList.forEach(el => {
      el.print();
    });
  }

  async #inputWinningNumbers() {
    Console.print(INPUT_MESSAGE.WINNING_NUMBERS);
    const winningNumbers = await Console.readLineAsync('');
    this.#validateWinningNumbers(winningNumbers);
  }

  #validateWinningNumbers(winningNumbers) {
    const splitWinningNumbers = winningNumbers.split(SYMBOL.COMMA);

    if (splitWinningNumbers.length !== 6) {
      throw new Error(INPUT_ERROR_MESSAGE.WINNING_NUMBERS_ERROR);
    }
    splitWinningNumbers.sort((a, b) => a - b);
    splitWinningNumbers.forEach(num => {
      const checkValidWinningNumbers = Number(num);
      if (isNaN(checkValidWinningNumbers)) {
        throw new Error(INPUT_ERROR_MESSAGE.NUMBER_ERROR);
      }

      if (this.#winningNumbers.includes(checkValidWinningNumbers)) {
        throw new Error(INPUT_ERROR_MESSAGE.DUPLICATE_WINNING_NUMBER);
      }

      this.#winningNumbers.push(splitWinningNumbers);
    });
  }
}

export default App;
