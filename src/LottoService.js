import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import { ERROR_MESSAGE, LOTTO } from './utils/Define';
import CustomError from './utils/Errors';

class LottoService {
  sellLotto(purchaseAmount) {
    this.validatePurchaseAmount(purchaseAmount);
    const quantitiy = Math.floor(purchaseAmount / LOTTO.price);
    return [this.#generateLotto(quantitiy), quantitiy];
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

  // 추후 중복을 확인하는 부분을 분리할 수 있을 것 같음
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
}

export default LottoService;
