import { MissionUtils, Console } from '@woowacourse/mission-utils';
import * as C from './constants.js';
import Lotto from './Lotto.js';

class App {
  #lottoCount;
  #lottoList = [];

  async play() {
    await this.#inputPurchaseAmount();
    Console.print('');
    this.#purchaseLottos();
    this.#printAllLottos();
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
      if (!randomNumbers.includes(String(number))) {
        randomNumbers.push(String(number));
      }
    }
    return randomNumbers;
  }

  #printAllLottos() {
    Console.print(`${this.#lottoList.length}${C.PURCHASE_SOME_LOTTO}`);
    this.#lottoList.forEach((el) => {
      el.print();
    });
  }
}

export default App;
