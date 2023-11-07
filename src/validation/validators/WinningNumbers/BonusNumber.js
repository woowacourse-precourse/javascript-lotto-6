import { CustomError } from '../../../error/CustomError.js';
import { LottoValidator } from '../Lotto.js';

export class BonusNumberValidator extends LottoValidator {
  isDuplicatedWithWinningNumbers(winningNumbers, bonusNumber) {
    return winningNumbers.includes(bonusNumber);
  }

  validate(winningNumbers, bonusNumber) {
    if (this.isDuplicatedWithWinningNumbers(winningNumbers, bonusNumber)) {
      throw CustomError.BonusNumber('당첨번호와 중복되었습니다.');
    }

    if (this.isNumberNotInRangeNumber(bonusNumber)) {
      throw CustomError.BonusNumber('1 미만 혹은 45 를 초과하는 숫자가 포함되어 있습니다.');
    }
  }
}

const BonusNumber = new BonusNumberValidator();

export { BonusNumber };
