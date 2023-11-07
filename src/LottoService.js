import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import { ERROR_MESSAGE, LOTTO } from './utils/Define';
import CustomError from './utils/Errors';

class LottoService {
  sellLotto(purchaseAmount) {
    this.validatePurchaseAmount(purchaseAmount);
    const quantitiy = Math.floor(purchaseAmount / LOTTO.price);
    return this.#generateLotto(quantitiy);
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!/^\d000$/.test(String(purchaseAmount))) {
      throw CustomError.userInputError(ERROR_MESSAGE.invalidAmountError);
    }
  }

  #generateLotto(quantitiy) {
    const lottoNumbers = this.#generateLottoNumbers(quantitiy);
    return lottoNumbers.map((number) => new Lotto(number));
  }

  #generateLottoNumbers(quantitiy) {
    const lottoNumbers = new Set();
    while (lottoNumbers.size < quantitiy) {
      const newLottoNumbers = Random.pickUniqueNumbersInRange(
        LOTTO.numberMim,
        LOTTO.numberMax,
        LOTTO.numberCount,
      );
      newLottoNumbers.sort((a, b) => a - b);
      lottoNumbers.add(JSON.stringify(newLottoNumbers));
    }
    return Array.from(lottoNumbers).map(JSON.parse);
  }

  // #checkduplication(lottoNumbers, newLottoNumbers) {
  //   const duplication = lottoNumbers.some((number) =>
  //     number.every((val, index) => val === newLottoNumbers[index]),
  //   );
  //   return duplication;
  // }
}

export default LottoService;
