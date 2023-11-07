import { CONFIG } from '../constants/constants';
import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import Player from './Player';

class LottoGame {
  #tickets = [];
  async run() {
    await this.inputPrice();
  }

  async inputPrice() {
    const price = await new Player().readPrice();
    this.buyLotto(price);
  }

  async buyLotto(price) {
    for (let i = 0; i < price / 1000; i++) {
      const lottoNumber = this.#generateRandomLottoNumbers();
      const lotto = new Lotto(lottoNumber);
      this.#tickets.push(lotto.getLottoNumbers());
    }
  }

  #generateRandomLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      CONFIG.range.minNumber,
      CONFIG.range.maxNumber,
      CONFIG.lottoLength,
    );
  }
}

export default LottoGame;
