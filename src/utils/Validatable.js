import Validator from './Validate.js';

class Validatable extends Validator {
  /**
   * @returns {number}
   */
  toNumber() {
    return Number(this.value);
  }

  /**
   * @returns {string}
   */
  toString() {
    return String(this.value);
  }

  /**
   * @returns {number[]}
   */
  toArray() {
    return Array.from(this.value);
  }

  /**
   * @returns {number}
   */
  toInteger() {
    return parseInt(this.value, 10);
  }
}

export default Validatable;
