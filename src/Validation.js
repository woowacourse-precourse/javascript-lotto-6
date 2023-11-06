export class Validation {
  static isUnique(target) {
    return new Set(target).size === target.length;
  }

  static isLength(target, length) {
    return target.length === length;
  }

  static isNumber(target) {
    return typeof target === "number";
  }

  static isInteger(target) {
    return Number.isInteger(target);
  }

  static isPositive(target) {
    return target > 0;
  }

  static isOnRange(target, min, max) {
    return target >= min && target <= max;
  }

  static isMultiple(target, multiple){
    return target % multiple === 0
  }
}
