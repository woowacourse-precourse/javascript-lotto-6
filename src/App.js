import { MissionUtils, Console } from '@woowacourse/mission-utils';
import {
  INPUT_MESSAGE,
  INPUT_ERROR_MESSAGE,
  SYMBOL,
  RESULT_MESSAGE,
} from './constants/constants';
import Lotto from './Lotto';

class App {
  #lottoCount;
  #lottoList = [];
  #winningNumbers = [];
  #bonusNumber;
  #purchaseAmount;

  async play() {
    try {
      await this.#inputPurchaseAmount();
      this.#purchaseLottos();
      this.#printAllLottos();
      await this.#inputWinningNumbers();
      await this.#inputBonusNumber();
      this.#calculateResult();
    } catch (err) {
      Console.print(err.message);
      await this.play();
    }
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
    this.#purchaseAmount = checkValidNumber;
    this.#lottoCount = checkValidNumber / 1000;
  }

  #purchaseLottos() {
    for (let i = 0; i < this.#lottoCount; i++) {
      const randomNumbers = this.#getRandomNumbers();
      this.#lottoList.push(new Lotto(randomNumbers));
    }
  }

  #getRandomNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6,
    );
    return randomNumbers.sort((a, b) => a - b);
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
    await this.#validateWinningNumbers(winningNumbers);
  }

  async #validateWinningNumbers(winningNumbers) {
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

      this.#winningNumbers.push(checkValidWinningNumbers);
    });
  }
  async #inputBonusNumber() {
    Console.print(INPUT_MESSAGE.BONUS_NUMBER);
    const bonusNumber = await Console.readLineAsync('');
    this.#validateBonusNumber(bonusNumber);
  }

  #validateBonusNumber(bonusNumber) {
    const checkValidateNumber = Number(bonusNumber);
    if (isNaN(checkValidateNumber)) {
      throw new Error(INPUT_ERROR_MESSAGE.NUMBER_ERROR);
    }
    if (this.#winningNumbers.includes(checkValidateNumber)) {
      throw new Error(INPUT_ERROR_MESSAGE.DUPLICATE_BONUS_NUMBER);
    }
    this.#bonusNumber = checkValidateNumber;
  }

  #calculateResult() {
    Console.print(INPUT_MESSAGE.WINNING_MESSAGE);
    Console.print(SYMBOL.DIVIDER);
  }
}

export default App;
