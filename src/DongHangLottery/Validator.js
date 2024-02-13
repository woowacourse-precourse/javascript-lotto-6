import {
  LottoConstants,
  ErrorMessage,
} from './GameMessageManager/GameMessage.js';

class Validator {
  isValidPurchaseAmount(money) {
    if (!this.isThousandWonUnit(money))
      throw new Error(ErrorMessage.INVALID_INPUT_PRICE_UNIT);
    if (!this.isNumber(money))
      throw new Error(ErrorMessage.INVALID_INPUT_PRICE_TYPE);
    return true;
  }

  isThousandWonUnit(money) {
    if (money % LottoConstants.THOUSAND_WON_UNIT === 0 && money !== 0) return true;
    return false;
  }

  isNumber(input) {
    if (!isNaN(input)) return true;
    return false;
  }

  isValidWinningNumbers(lotto) {
    if (!this.isValidWinningNumbersLength(lotto))
      throw new Error(ErrorMessage.INVALID_INPUT_MAIN_LOTTO_LENGTH);
    lotto.forEach(item => {
      if (!this.isNumber(item))
        throw new Error(ErrorMessage.INVALID_INPUT_LOTTO_TYPE_ERROR);
      if (this.isValidScoprNumber(lotto))
        throw new Error(ErrorMessage.INVALID_LOTTO_NUMBER_SCOPE);
    });
    if (!this.isDuplicateWiniingNumber(lotto))
      throw new Error(ErrorMessage.DUPLICATED_LOTTO_NUMBER_ERROR);

    return true;
  }

  isValidWinningNumbersLength(winnerNumberArray) {
    if (winnerNumberArray.length !== LottoConstants.LOTTO_NUMBER_COUNT)
      return false;
    return true;
  }

  isDuplicateWiniingNumber(input) {
    if ([...new Set(input)].length !== LottoConstants.LOTTO_NUMBER_COUNT)
      return false;
    return true;
  }

  isValidScoprNumber(number) {
    if (
      number < LottoConstants.MAX_LOTTO_NUMBER &&
      number > LottoConstants.MIN_LOTTO_NUMBER
    )
      return true;
    return false;
  }

  isValidBonusNumbers(winnigNumber, bonusNumber) {
    if (!this.isValidBonusNumberLegnth(bonusNumber))
      throw new Error(ErrorMessage.INVALID_INPUT_BONUS_LOTTO_LENGTH);
    if (!this.isNumber(bonusNumber))
      throw new Error(ErrorMessage.INVALID_INPUT_LOTTO_TYPE_ERROR);
    if (!this.isDuplicateBonusNumber(winnigNumber, bonusNumber))
      throw new Error(ErrorMessage.DUPLICATED_LOTTO_NUMBER_ERROR);
    if (!this.isValidScoprNumber(bonusNumber))
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBER_SCOPE);
  }

  isValidBonusNumberLegnth(bonusNumber) {
    if (
      !(
        bonusNumber > LottoConstants.MIN_LOTTO_NUMBER &&
        bonusNumber < LottoConstants.MAX_LOTTO_NUMBER
      )
    )
      return false;
    return true;
  }

  isDuplicateBonusNumber(winnigNumber, bonusNumber) {
    if (winnigNumber.includes(bonusNumber) === true) return false;
    return true;
  }
}

export default Validator;
