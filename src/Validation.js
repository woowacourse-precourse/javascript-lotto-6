class Validation {
  static validatePurchaseAmount(purchaseAmount) {
    const getPurchaseAmount = purchaseAmount.trim();
    if (!getPurchaseAmount) {
      throw new Error('[ERROR] 구입 금액을 입력해주세요.');
    }

    if (!Number.isSafeInteger(Number(getPurchaseAmount))) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    }
    if (getPurchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 1000원 단위로 입력해주세요.');
    }
    return getPurchaseAmount;
  }

  static validateWinningNumbers(winningNumbers) {
    const winningNumbersArray = winningNumbers.split(',').map((num) => Number(num.trim()));
    if (!winningNumbersArray || winningNumbersArray.length !== 6) {
      throw new Error('[ERROR] 6개의 당첨 번호를 입력해주세요.');
    }

    const uniqueWinningNumbers = Array.from(new Set(winningNumbersArray));
    if (
      uniqueWinningNumbers.length !== 6 ||
      uniqueWinningNumbers.some((num) => !Number.isSafeInteger(num) || num < 1 || num > 45)
    ) {
      throw new Error('[ERROR] 1부터 45 사이의 6개 중복되지 않는 자연수를 입력해주세요.');
    }

    return uniqueWinningNumbers;
  }
}

export default Validation;
