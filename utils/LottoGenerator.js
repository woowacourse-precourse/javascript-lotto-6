import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from './Constants.js';
import Lotto from '../src/Lotto.js';

const LottoGenerator = {
  generateRandomNumber(lottoQuantity) {
    return Array.from({ length: lottoQuantity }, () =>
      Random.pickUniqueNumbersInRange(
        CONSTANTS.minimumNumber,
        CONSTANTS.maximumNumber,
        CONSTANTS.mainNumberCount,
      ).sort((a, b) => a - b),
    );
  },

  generateLotto(purchaseAmount) {
    const lottoQuantity = purchaseAmount / CONSTANTS.eachLottoPrice;
    const lottoNumbers = this.generateRandomNumber(lottoQuantity);
    return lottoNumbers.map((lottoNumber) => new Lotto(lottoNumber));
  },
};

export default LottoGenerator;
