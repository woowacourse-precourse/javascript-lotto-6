import { MissionUtils, Console } from '@woowacourse/mission-utils';
import * as C from './constants.js';
import Lotto from './Lotto.js';

class App {
  #lottoCount;
  #lottoList = [];
  #winningNumber = [];

  async play() {
    await this.#inputPurchaseAmount();
    Console.print('');
    this.#purchaseLottos();
    this.#printAllLottos();
    Console.print('');
    await this.#inputWinningNumbers();
    Console.print('');
  }

  async #inputPurchaseAmount() {
    Console.print(C.PURCHASE_AMOUNT_INPUT);
    const purchaseAmount = await Console.readLineAsync('');
    this.#validatePurchaseAmount(purchaseAmount);
  }

  #validatePurchaseAmount(purchaseAmount) {
    const convertNumber = Number(purchaseAmount);
    if (isNaN(convertNumber)) {
      throw new Error('[ERROR] 구매 금액이 숫자가 아닙니다.');
    }
    if (convertNumber % 1000 !== 0) {
      throw new Error('[ERROR] 1000단위로 나누어 떨어지는 금액이 아닙니다.');
    }
    this.#lottoCount = convertNumber / 1000;
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
      if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }

    return randomNumbers.sort((a, b) => a - b);
  }

  #printAllLottos() {
    Console.print(`${this.#lottoList.length}${C.PURCHASE_SOME_LOTTO}`);
    this.#lottoList.forEach((el) => {
      el.print();
    });
  }

  async #inputWinningNumbers() {
    Console.print(C.LOTTO_NUMBERS_INPUT);
    const winningNumbers = await Console.readLineAsync('');
    this.#validateWinningNumbers(winningNumbers);
  }

  #validateWinningNumbers(winningNumbers) {
    const splitWinningNumbers = winningNumbers.split(',');
    if (splitWinningNumbers.length != 6) {
      throw new Error('[ERROR] 입력된 당첨 번호가 6자리가 아닙니다.');
    }
    splitWinningNumbers.sort((a, b) => a - b);
    splitWinningNumbers.forEach((number) => {
      const convertNumber = Number(number);
      if (isNaN(convertNumber)) {
        throw new Error('[ERROR] 입력된 당첨 번호가 숫자가 아닙니다.');
      }

      if (this.#winningNumber.includes(convertNumber)) {
        throw new Error('[ERROR] 입력된 당첨 번호에 중복된 숫자가 있습니다.');
      }
      this.#winningNumber.push(convertNumber);
    });
  }
}

export default App;
