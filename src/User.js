import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import CONSTANTS from '../utils/Constants.js';
import MESSAGES from '../utils/Messages.js';

class User {
  lottos;

  constructor(purchaseAmount) {
    this.lottos = this.#generateLotto(purchaseAmount);
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
}

export default User;
