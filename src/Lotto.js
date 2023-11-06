import { PurchaseLotto } from './PurchaseLotto.js';
import { LOTTO_NUMBERS } from './constants.js';
import { randomNum } from './utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.purchaseLotto = new PurchaseLotto();
  }

  async lottoCount() {
    await this.purchaseLotto.initialize(); // 비동기 초기화를 기다린 후에
    return this.purchaseLotto.getLottoCount(); // 로또 개수를 반환합니다.
  }

  async createLotto() {
    const count = await this.lottoCount(); // 비동기로 로또 개수를 가져온다
    const numbers = new Set();

    for (let i = 0; i < count; i++) {
      const number = randomNum();
      numbers.add(number.sort((numA, numB) => numA - numB));
    }
    return [...numbers];
  }

  async viewLottoList() {
    const theLottoList = await this.createLotto();

    return theLottoList.map((item) => `[${item.join(', ')}]`).join(`\n`);
  }
}

export default Lotto;
