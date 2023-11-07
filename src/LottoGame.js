import { CONFIG } from '../constants/constants';
import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import Player from './Player';
import WinningBonus from './WinningBonus';

class LottoGame {
  #tickets = [];
  #winningNumber;
  #bonusNumber;
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
    this.inputWinningBonus();
  }

  async inputWinningBonus() {
    const winningBonus = new WinningBonus();
    this.#winningNumber = await winningBonus.readWinning();
    this.#bonusNumber = await winningBonus.readBonus();
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
