import Lotto from './Lotto.js';
import { PurchaseLotto } from './PurchaseLotto.js';
import { randomNum } from './utils.js';

class GameExport {
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
    await this.purchaseLotto.initialize();
    return this.purchaseLotto.getLottoCount();
  }

  async createLotto() {
    const count = await this.lottoCount();

    for (let i = 0; i < count; i++) {
      let lottoNumbers = randomNum();
      lottoNumbers = lottoNumbers.sort((numA, numB) => numA - numB);
      this.makeLotto(lottoNumbers);
    }
    return this.#lottos.map((lotto) => lotto.getNumbers());
  }

  async viewLottoList() {
    const theLottoList = await this.createLotto();
    return theLottoList.map((item) => `[${item.join(', ')}]`).join(`\n`);
  }

  getLottos() {
    return this.#lottos;
  }
}

export default GameExport;
