import Validations from "./Validations.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 당첨 로또 번호 유효성 검사
   * @param {Array} numbers 
   */
  #validate(numbers) {
    numbers.forEach((number) => {
      Validations.isNumber(number);
      Validations.isInRange(number);
      Validations.isInteger(number);
    });
    Validations.isNotDuplicated(numbers);
    Validations.isProperLength(numbers);
  }
  
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
