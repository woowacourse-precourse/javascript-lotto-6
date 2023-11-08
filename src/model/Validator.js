import { LIMITS } from '../constants/fixedValue.js';
import Validate from '../utils/ValidateUtils.js';
import { arrayWinningNumbers, changeType } from '../utils/arrayUtils.js';

class Validator {
  static throwPurchaseAmountError(inputString) {
    const resultNaturalNumber = Validate.isNaturalNumber(inputString);
    const resultDivisibleByPriceUnit =
      Validate.isValidPurchaseAmount(inputString);

    Validate.falseAndError(
      resultNaturalNumber,
      '[ERROR] 숫자가 잘못된 형식입니다.',
    );

    Validate.falseAndError(
      resultDivisibleByPriceUnit,
      `[ERROR] 구입 금액은 ${LIMITS.priceUnit}원 단위의 수만 가능합니다.`,
    );
    return inputString;
  }

  static throwWinningNumbersError(inputString) {
    const splitAndTrimmedArray = arrayWinningNumbers(inputString);
    const resultNaturalNumber = splitAndTrimmedArray.some(
      (str) => !Validate.isNaturalNumber(str),
    );
    const lottoNumbers = changeType(splitAndTrimmedArray);

    Validate.trueAndError(
      resultNaturalNumber,
      '[ERROR] 숫자가 잘못된 형식입니다.',
    );

    return lottoNumbers;
  }

  static throwBonusNumberError(inputString) {
    const resultNaturalNumber = Validate.isNaturalNumber(inputString);
    const bonusNumber = Number(inputString);

    Validate.falseAndError(
      resultNaturalNumber,
      '[ERROR] 숫자가 잘못된 형식입니다.',
    );
    if (LIMITS.maxRange < bonusNumber) {
      throw new Error(
        `[ERROR] 보너스 번호는 ${LIMITS.minRange}부터 ${LIMITS.maxRange}사이의 숫자여야 합니다.`,
      );
    }

    return bonusNumber;
  }

  static compareWinningAndBonusNumbers(winningNumbers, bonusNumber) {
    const resultForDuplicates = Validate.checkForDuplicateBonusNumber(
      winningNumbers,
      bonusNumber,
    );

    if (resultForDuplicates === false) {
      throw new Error('[ERROR] 당첨 번호와 같은 숫자가 있습니다.');
    }
    return bonusNumber;
  }
}

export default Validator;
