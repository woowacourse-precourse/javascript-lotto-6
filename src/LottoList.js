import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import BuyLotto from './BuyLotto.js';
import { LOTTO_RULE, INPUT_MESSAGES, ERROR_MESSAGES } from './Constants.js';

const LENGTH = LOTTO_RULE.LENGTH;
const { MIN, MAX } = LOTTO_RULE.RANGE;

class LottoList {
  #lottos;

  constructor() {
    this.#lottos = [];
    this.buyLotto = new BuyLotto();
  }
  makeLotto(lottoNumbers) {
    const lotto = new Lotto(lottoNumbers);
    this.#lottos.push(lotto);
  }

  async lottoCount() {
    await this.buyLotto.initialize();
    return this.buyLotto.getLottoCount();
  }

  async generateLotto() {
    const count = await this.lottoCount();

    for (let i = 0; i < count; i++) {
      let lottoNumbers = Random.pickUniqueNumbersInRange(MIN, MAX, LENGTH);
      lottoNumbers = lottoNumbers.sort((a, b) => a - b); //오름차순
      this.makeLotto(lottoNumbers);
    }

    return this.#lottos.map((lotto) => lotto.getNumbers());
  }

  async makeLottoList() {
    const lottoList = await this.generateLotto();

    return lottoList.map((el) => `[${el.join(', ')}]`).join('\n');
  }
}
export default LottoList;
