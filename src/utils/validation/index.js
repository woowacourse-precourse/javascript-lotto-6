export class Validation {
  static isLength(target, length) {
    return target.length === length;
  }

  static isNumber(target) {
    return typeof target === "number";
  }

  static isInteger(target) {
    return Number.isInteger(target);
  }

  static isOnRange(target, min, max) {
    return target >= min && target <= max;
  }

  static isMultipleOf(target, multiple) {
    return target % multiple === 0;
  }
}
