import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import CONSTANTS from '../utils/Constants.js';
import MESSAGES from '../utils/Messages.js';
import { PRIZE_REWARD } from '../utils/Prize.js';

class User {
  lottos;

  #prize;

  constructor(purchaseAmount) {
    this.lottos = this.#generateLotto(purchaseAmount);
    this.#prize = {
      fifthPrize: 0,
      fourthPrize: 0,
      thirdPrize: 0,
      secondPrize: 0,
      firstPrize: 0,
    };
  }

  #generateLotto(purchaseAmount) {
    const lottoQuantity = purchaseAmount / CONSTANTS.eachLottoPrice;
    const lottoNumbers = this.generateRandomNumbers(lottoQuantity);
    return lottoNumbers.map((lottoNumber) => new Lotto(lottoNumber));
  }

  generateRandomNumbers(lottoQuantity) {
    return Array.from({ length: lottoQuantity }, () =>
      Random.pickUniqueNumbersInRange(
        CONSTANTS.minimumNumber,
        CONSTANTS.maximumNumber,
        CONSTANTS.mainNumberCount,
      ).sort((a, b) => a - b),
    );
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
}

export default User;
