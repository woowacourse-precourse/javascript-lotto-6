import ValidationError from "../Error/ValidationError.js";
import ERROR_CONSTANT from "../Constant/ErrorConstant.js";
import DATATYPE_CONSTANT from "../Constant/DataTypeConstant.js";
import NUMBER_CONSTANT from "../Constant/NumberConstant.js"
import Formattor from "../View/Formattor.js";
import RULE_CONSTANT from "../Constant/RuleConstant.js";

class WinningNumbersChecker {
  #commonWinningNumbers
  #bonusWinningNumber
  #winningConditions

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
    const equlsCountArray = this.#checkEqulsCount(numbers);
    for (const [rank, condition] of Object.entries(this.#winningConditions)) {
      if (
        condition[NUMBER_CONSTANT.ZERO] === equlsCountArray[NUMBER_CONSTANT.ZERO] &&
        condition[NUMBER_CONSTANT.ONE] === equlsCountArray[NUMBER_CONSTANT.ONE]
        ) {
        return (rank);
      }
    }
    return (RULE_CONSTANT.OPTION_NONE);
  }
}

export default WinningNumbersChecker;