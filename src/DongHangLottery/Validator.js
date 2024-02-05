class Validator {
  isValidPurchaseAmount(money) {
    if (!this.isThousandWonUnit(money))
      throw new Error('[ERROR]: 올바르지 않은 구매 요청 금액입니다.');
    if (!this.isNumber(money))
      throw new Error('[ERROR]: 구매 금액은 숫자여야 합니다.');
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
    console.log('lotto', lotto, lotto.length);
    if (!this.isValidWinningNumbersLength(lotto))
      throw new Error('[ERROR]: 올바르지 않은 로또 길이입니다.');
    lotto.forEach(item => {
      if (!this.isNumber(item))
        throw new Error('[ERROR]: 로또 번호는 숫자여야 합니다.');
    });
    if (!this.isDuplicateWiniingNumber(lotto))
      throw new Error('[ERROR]: 로또 번호에 중복된 번호가 있습니다..');
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
      throw new Error('[ERROR]:');
    if (!this.isNumber(bonusNumber)) throw new Error('[ERROR]:');
    if (!this.isDuplicateBonusNumber(winnigNumber, bonusNumber))
      throw new Error('[ERROR]:');
  }

  isValidBonusNumberLegnth(bonusNumber) {
    if (bonusNumber.length !== 1) return false;
    return true;
  }

  isDuplicateBonusNumber(winnigNumber, bonusNumber) {
    // console.log("chehck isDuplicateBonusNumber",winnigNumber,bonusNumber,typeof winnigNumber, typeof bonusNumber)
    if (winnigNumber.includes(bonusNumber) === true) return false;
    return true;
  }
}

export default Validator;
