class Validation {
  static cleanAndValidateInput({ input, errorMessage, checkRange = false }) {
    const cleanedInput = Validation.cleanInput(input);
    const intValue = Number(cleanedInput);

    if (
      !cleanedInput ||
      !Validation.isSafeInteger(intValue) ||
      (checkRange && !Validation.isInRange(intValue))
    ) {
      throw new Error(errorMessage);
    }

    return intValue;
  }

  static validateIntegerArray(numbers, errorMessage, checkRange = true) {
    const cleanedNumbers = Validation.cleanInput(numbers);
    const parsedNumbers = cleanedNumbers
      .split(',')
      .map((num) => Validation.cleanAndValidateInput({ input: num, errorMessage, checkRange }));

    return parsedNumbers;
  }

  static validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0 || purchaseAmount < 1000) {
      Validation.cleanAndValidateInput({
        input: purchaseAmount,
        errorMessage: '[ERROR] 1000원 단위로 구입 금액을 입력해주세요.',
        checkRange: true,
      });
    }

    return purchaseAmount;
  }

  static validateWinningNumbers(winningNumbers) {
    const numbers = Validation.validateIntegerArray(
      winningNumbers,
      '[ERROR] 1부터 45 사이의 6개 중복되지 않는 자연수를 입력해주세요.',
    );

    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 1부터 45 사이의 6개 중복되지 않는 자연수를 입력해주세요.');
    }

    return numbers;
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    const cleanedBonusNumber = Validation.cleanAndValidateInput({
      input: bonusNumber,
      errorMessage: '[ERROR] 1부터 45 사이의 보너스 번호를 입력해주세요.',
      checkRange: true,
    });

    if (winningNumbers.includes(cleanedBonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.');
    }

    return cleanedBonusNumber;
  }

  static cleanInput(input) {
    return input.trim();
  }

  static isSafeInteger(value) {
    return Number.isSafeInteger(Number(value));
  }

  static isInRange(value, minValue = 1, maxValue = 45) {
    return value >= minValue && value <= maxValue;
  }
}

export default Validation;
