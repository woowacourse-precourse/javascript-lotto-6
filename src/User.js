import CONSTANTS from '../utils/Constants.js';
import MESSAGES from '../utils/Messages.js';
import { PRIZE_REWARD } from '../utils/Prize.js';
import LottoGenerator from '../utils/LottoGenerator.js';

class User {
  lottos;

  #prize;

  #purchaseAmount;

  constructor(purchaseAmount) {
    this.lottos = LottoGenerator.generateLotto(purchaseAmount);
    this.#prize = {
      fifthPrize: 0,
      fourthPrize: 0,
      thirdPrize: 0,
      secondPrize: 0,
      firstPrize: 0,
    };
    this.#purchaseAmount = purchaseAmount;
  }

  getLottoStringArray() {
    return this.lottos.map((lotto) =>
      MESSAGES.printLottoBracket(lotto.getNumbers().join(MESSAGES.printLottoNumberDelimiter)),
    );
  }

  raffleLottos(mainNumberArray, bonusNumber) {
    this.lottos.forEach((lotto) => {
      const prize = lotto.raffleLotto(mainNumberArray, bonusNumber);
      if (prize === CONSTANTS.nothing) return;
      this.#prize[prize] += 1;
    });
  }

  printStatistic() {
    return Object.entries(this.#prize).map((prize) => prize[1]);
  }

  calculateReward() {
    return Object.entries(this.#prize).reduce(
      (acc, [prize, count]) => acc + PRIZE_REWARD[prize] * count,
      0,
    );
  }

  calculateEarningRate() {
    const earningRate = (this.calculateReward() / this.#purchaseAmount) * 100;
    return earningRate.toFixed(1);
  }
}

export default User;
