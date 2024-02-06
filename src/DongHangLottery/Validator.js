import { GameMessage } from './GameMessageManager/GameMessage.js';

class Validator {
  isValidPurchaseAmount(money) {
    if (!this.isThousandWonUnit(money))
      throw new Error(GameMessage.INVALID_INPUT_PRICE_UNIT);
    if (!this.isNumber(money))
      throw new Error(GameMessage.INVALID_INPUT_PRICE_TYPE);
    return true;
  }

  isThousandWonUnit(money) {
    if (money % 1000 === 0 && money !== 0) return true;
    return false;
  }

  isNumber(input) {
    if (!isNaN(input)) return true;
    return false;
  }

  isValidWinningNumbers(lotto) {
    if (!this.isValidWinningNumbersLength(lotto))
      throw new Error(GameMessage.INVALID_INPUT_MAIN_LOTTO_LENGTH);
    lotto.forEach(item => {
      if (!this.isNumber(item))
        throw new Error(GameMessage.INVALID_INPUT_LOTTO_TYPE_ERROR);
    });
    if (!this.isDuplicateWiniingNumber(lotto))
      throw new Error(GameMessage.DUPLICATED_LOTTO_NUMBER_ERROR);
    return true;
  }

  isValidWinningNumbersLength(winnerNumberArray) {
    if (winnerNumberArray.length !== 6) return false;
    return true;
  }

  isDuplicateWiniingNumber(input) {
    if ([...new Set(input)].length !== 6) return false;
    return true;
  }
  isValidBonusNumbers(winnigNumber, bonusNumber) {
    if (!this.isValidBonusNumberLegnth(bonusNumber))
      throw new Error(GameMessage.INVALID_INPUT_BONUS_LOTTO_LENGTH);
    if (!this.isNumber(bonusNumber))
      throw new Error(GameMessage.INVALID_INPUT_LOTTO_TYPE_ERROR);
    if (!this.isDuplicateBonusNumber(winnigNumber, bonusNumber))
      throw new Error(GameMessage.DUPLICATED_LOTTO_NUMBER_ERROR);
  }

  isValidBonusNumberLegnth(bonusNumber) {
    if (!(bonusNumber > 1 && bonusNumber < 46)) return false;
    return true;
  }

  isDuplicateBonusNumber(winnigNumber, bonusNumber) {
    if (winnigNumber.includes(bonusNumber) === true) return false;
    return true;
  }
}

export default Validator;
