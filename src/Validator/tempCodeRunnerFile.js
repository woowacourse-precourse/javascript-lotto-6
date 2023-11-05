
    }
    return false;
  }

  static #isOutOfRange(number) {
    if (
      this.#isNotNaturalNumber(number) &&
      (number > RANDOM.max || number < RANDOM.min)
    ) {
      throw new ValidationError(ERROR.outOfRange);
    }
  }

  static validatePurchaseAmount(amount) {
    if (
      this.#isNotNaturalNumber(amount) ||
      Number(amount) % NUMBER.lottoPurchaseUnit
    ) {
      throw new ValidationError(ERROR.invalidPurchaseAmount);
    }
  }

  static validateRangeOfNumbers(numbers) {
    numbers