import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import { ERROR_MESSAGE, LOTTO } from './utils/Define';
import CustomError from './utils/Errors';
import WinningLotto from './domain/WinningLotto';

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
        LOTTO.numberMin,
        LOTTO.numberMax,
        LOTTO.numberCount,
      );
      newLottoNumbers.sort((a, b) => a - b);
      lottoNumbers.add(JSON.stringify(newLottoNumbers));
    }
    return Array.from(lottoNumbers).map(JSON.parse);
  }

  getWinningLotto(winningNumbers, bonusNumber) {
    this.#validateLottoNumbers(winningNumbers);
    this.#validateBonusNumber(bonusNumber);
    this.#generateWinningLotto(winningNumbers, bonusNumber);
  }

  #validateLottoNumbers(winningNumbers) {
    if (!/^(\d+)(,\d+)*$/.test(String(winningNumbers))) {
      throw CustomError.lottoValidateError(ERROR_MESSAGE.invalidInputNumbers);
    }
  }

  #validateBonusNumber(bonusNumber) {
    if (Number(bonusNumber)) {
      throw CustomError.lottoValidateError(
        ERROR_MESSAGE.invalidInputBonusNumber,
      );
    }
  }

  #generateWinningLotto(winningNumbers, bonusNumber) {
    return new WinningLotto(winningNumbers, bonusNumber);
  }
}

export default LottoService;
