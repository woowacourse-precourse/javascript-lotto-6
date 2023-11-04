class Validation {
  static validatePurchaseAmount(purchaseAmount) {
    const cleanedPurchaseAmount = Validation.cleanInput(purchaseAmount);

    if (!cleanedPurchaseAmount) throw new Error('[ERROR] 구입 금액을 입력해주세요.');
    if (!Validation.isSafeInteger(cleanedPurchaseAmount)) throw new Error('[ERROR] 숫자를 입력해주세요.');
    if (cleanedPurchaseAmount % 1000 !== 0) throw new Error('[ERROR] 1000원 단위로 입력해주세요.');

    return cleanedPurchaseAmount;
  }

  static validateWinningNumbers(winningNumbers) {
    const cleanedNumbers = Validation.cleanInput(winningNumbers);
    const numbers = cleanedNumbers.split(',').map((num) => Number(num.trim()));

    if (numbers.length !== 6) throw new Error('[ERROR] 6개의 당첨 번호를 입력해주세요.');
    if (
      new Set(numbers).size !== 6 ||
      numbers.some((num) => !Validation.isSafeInteger(num) || !Validation.isInRange(num))
    ) {
      throw new Error('[ERROR] 1부터 45 사이의 6개 중복되지 않는 자연수를 입력해주세요.');
    }

    return numbers;
  }

  static cleanInput(input) {
    return input.trim();
  }

  static isSafeInteger(value) {
    return Number.isSafeInteger(Number(value));
  }

  static isInRange(value) {
    return value >= 1 && value <= 45;
  }
}

export default Validation;
