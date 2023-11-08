import ValidationError from '../Error/ValidationError';
import ERROR_CONSTANT from '../Constant/ErrorConstant';
import DATATYPE_CONSTANT from '../Constant/DataTypeConstant';
import NUMBER_CONSTANT from '../Constant/NumberConstant';
import Formattor from '../View/Formattor';
import RULE_CONSTANT from '../Constant/RuleConstant';

class WinningNumbersChecker {
  #commonWinningNumbers;
  #bonusWinningNumber;
  #winningConditions;

  constructor(commonWinningNumbers, bonusWinningNumber, winningConditions) {
    if (!Array.isArray(commonWinningNumbers)) {
      throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
    }
    if (!Number.isInteger(bonusWinningNumber)) {
      throw new ValidationError(ERROR_CONSTANT.NOT_A_NUMBER);
    }
    if (typeof winningConditions !== DATATYPE_CONSTANT.OBJECT) {
      throw new ValidationError(ERROR_CONSTANT.IS_NOT_EXPECTED_OBJECT);
    }

    this.#commonWinningNumbers = commonWinningNumbers;
    this.#bonusWinningNumber = bonusWinningNumber;
    this.#winningConditions = winningConditions;
  }

  #checkEqulsCount(numbers) {
    if (!Array.isArray(numbers)) {
      throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
    }
    const equlsCommonCount = (
      Formattor.getEqulsElementsCount(numbers, this.#commonWinningNumbers)
    );
    const equlsBonusCount = Formattor.getEqulsValueCount(this.#bonusWinningNumber, numbers);
    return ([equlsCommonCount, equlsBonusCount]);
  }

  checkWinningRank(numbers) {
    const [common, bonus] = this.#checkEqulsCount(numbers);

    const target = Object.entries(this.#winningConditions).find(
      ([, [commonCount, bonusCount]]) => commonCount === common && bonusCount === bonus,
    );

    if (target) {
      return target[NUMBER_CONSTANT.ZERO];
    }
    return (RULE_CONSTANT.OPTION_NONE);
  }
}

export default WinningNumbersChecker;
