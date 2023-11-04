class Validation {
  isValidWinningNumbers(numbers) {
    this.isNonDuplicatedNumbers(numbers);
    this.isNumbersInRange(numbers);
  }

  static isNonDuplicatedNumbers(numbers) {
    const nonDuplicatedNumbers = new Set(numbers);
    if (nonDuplicatedNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복된 숫자는 입력할 수 없습니다.');
    }
  }

  static isNumbersInRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 1이상 45이하의 숫자만 입력할 수 있습니다.');
      }
    });
  }
}

export default Validation;
