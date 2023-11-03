class Validate {
  static isSixNumbers(numbers, errorMessage) {
    if (numbers.length !== 6) {
      Validate.throwError(errorMessage);
    }
  }

  static isDuplicate(numbers, errorMessage) {
    if (new Set([...numbers]).size !== numbers.length) {
      Validate.throwError(errorMessage);
    }
  }

  static isInteger(numbers, errorMessage) {
    if (!numbers.every((number) => Number.isInteger(number))) {
      Validate.throwError(errorMessage);
    }
  }

  static isInRange(numbers, errorMessage) {
    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      Validate.throwError(errorMessage);
    }
  }

  static isAscendingOrder(numbers, errorMessage) {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const isEqual = (a, b) => a === b;
    if (
      !numbers.every((number, index) => isEqual(number, sortedNumbers[index]))
    ) {
      Validate.throwError(errorMessage);
    }
  }

  static throwError(errorMessage) {
    throw new Error(`[ERROR] ${errorMessage}`);
  }
}

export default Validate;
