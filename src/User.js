import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import CONSTANTS from '../utils/Constants.js';

class User {
  #lottos;

  constructor(purchaseAmount) {
    this.#lottos = this.#generateLotto(purchaseAmount);
  }

  #generateLotto(purchaseAmount) {
    const lottoQuantity = purchaseAmount / CONSTANTS.eachLottoPrice;
    const lottoNumbers = this.#generateRandomNumbers(lottoQuantity);
    return lottoNumbers.map((lottoNumber) => new Lotto(lottoNumber));
  }

  #generateRandomNumbers(lottoQuantity) {
    return Array.from(
      { length: lottoQuantity },
      Random.pickUniqueNumbersInRange(
        CONSTANTS.minimumNumber,
        CONSTANTS.maximumNumber,
        CONSTANTS.mainNumberCount,
      ),
    );
  }
}

export default User;
