import Screen from '../view/Screen';
import Lotto from '../model/Lotto';
import LottoResult from '../model/LottoResult';
import Rank from '../model/Rank';
import {
  generateLottoNumbers,
  calculateMatchingCount,
} from '../utils/LottoUtil';
import { MONEY_UNIT, MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH } from '../Constants';

class LottoGame {
  #lottos = [];
  #results = [];
  #count;
  #winningLotto;
  #bonusNumber;

  async start() {
    await this.#inputPurchaseCount();
    this.#issueLottos();
    this.#printLottos();

    await this.#inputWinningLotto();
    await this.#inputBonusNumber();

    Screen.printResultMessage();
    this.#calculateLottoResult();
    Rank.LIST.forEach((rank) => {
      const winningCount = this.#calculateWinningCount(rank);
      Screen.printRankResult(rank, winningCount);
    });
  }

  async #inputPurchaseCount() {
    try {
      this.#count = (await Screen.inputPurchaseMoney()) / MONEY_UNIT;
    } catch ({ message }) {
      Screen.printErrorMessage(message);
      await this.#inputPurchaseCount();
    }
  }

  async #issueLottos() {
    while (this.#count) {
      this.#lottos.push(
        new Lotto(generateLottoNumbers(MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH)),
      );
      this.#count -= 1;
    }
  }

  #printLottos() {
    Screen.printLottoNumbers(this.#lottos);
  }

  async #inputWinningLotto() {
    try {
      this.#winningLotto = new Lotto(await Screen.inputWinningLotto());
    } catch ({ message }) {
      Screen.printErrorMessage(message);
      await this.#inputWinningLotto();
    }
  }

  async #inputBonusNumber() {
    try {
      this.#bonusNumber = await Screen.inputBonusNumber(this.#winningLotto);
    } catch ({ message }) {
      Screen.printErrorMessage(message);
      await this.#inputBonusNumber();
    }
  }

  #calculateLottoResult() {
    this.#lottos.forEach((lotto) => {
      const matchingCount = calculateMatchingCount(lotto, this.#winningLotto);
      const includesBonus = lotto.getNumbers().includes(this.#bonusNumber);
      this.#results.push(new LottoResult(matchingCount, includesBonus));
    });
  }

  #calculateWinningCount(rank) {
    return this.#results.reduce(
      (acc, result) => acc + rank.isWinnable(result),
      0,
    );
  }
}

export default LottoGame;
