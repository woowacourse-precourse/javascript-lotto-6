class ValidationUtils {
  static validateIsNumber(input, message) {
    const inputNumber = Number(input);
    if (Number.isNaN(inputNumber)) {
      throw new Error(message);
    }
  }

  static validateNotNull(input, message) {
    if (!input) {
      throw new Error(message);
    }
  }

  static validateLength(input, length, message) {
    if (input.length !== length) {
      throw new Error(message);
    }
  }

  static validateNotDuplicate(input, message) {
    if (new Set(input).size !== input.length) {
      throw new Error(message);
    }
  }

  static validateInRange(input, min, max, message) {
    if (input < min || input > max) {
      throw new Error(message);
    }
  }

  static validateIsMultipleOf(input, multiple, message) {
    if (input % multiple !== 0) {
      throw new Error(message);
    }
  }

  static validateIsNotIncluded(input, element, message) {
    if (input.includes(element)) {
      throw new Error(message);
    }
  }
}

export default ValidationUtils;
