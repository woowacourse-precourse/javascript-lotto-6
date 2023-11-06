import Lotto from './Lotto.js';
import { PurchaseLotto } from './PurchaseLotto.js';
import { LOTTO_NUMBERS } from './constants.js';
import { randomNum } from './utils.js';

class LottoList {
  #lottos;

  constructor() {
    this.#lottos = [];
    this.purchaseLotto = new PurchaseLotto();
  }

  makeLotto(lottoNumbers) {
    const lotto = new Lotto(lottoNumbers);

    this.#lottos.push(lotto);
  }

  async lottoCount() {
    await this.purchaseLotto.initialize(); // 비동기 초기화를 기다린 후에
    return this.purchaseLotto.getLottoCount(); // 로또 개수를 반환.
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

export default LottoList;
