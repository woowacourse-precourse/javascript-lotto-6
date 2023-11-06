export class Validation {
  static isLength(target, length) {
    return target.length === length;
  }

  static isUnique(target) {
    return new Set(target).size === target.length;
  }

  static isNumber(target) {
    return typeof target === "number" && !Number.isNaN(target);
  }

  static isPositive(target) {
    return target > 0;
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
