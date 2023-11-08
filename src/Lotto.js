import ERROR from "./Message/Error";
import NUMBER from "./Message/Number";
import STRING from "./Message/Strig";

class Lotto {
  #numbers;

  constructor(numbers = []) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers = []) {
    Lotto.validateNumbersLength(numbers);
    Lotto.validateUniqueNumbers(numbers);
    Lotto.validateNumberRange(numbers);
  }

  static validateNumbersLength(numbers = []) {
    if (numbers.length !== NUMBER.lottoLength) {
      throw new Error(ERROR.lottoLength);
    }
  }

  static validateUniqueNumbers(numbers = []) {
    if (new Set(numbers).size !== NUMBER.lottoLength) {
      throw new Error(ERROR.lottoOverlap);
    }
  }

  static validateNumberRange(numbers = []) {
    if (!numbers.every((number) => this.isValidNumber(number))) {
      throw new Error(ERROR.lottoRange);
    }
  }

  static isValidNumber(number = []) {
    return Number.isInteger(number) && number >= NUMBER.lottoStartNumber && number <= NUMBER.lottoEndNumber;
  }

  getNumbers(){
    return [...this.#numbers];
  }

  toString() {
    return `${STRING.frontSquareBracket}${this.#numbers.join(STRING.joinChar)}${STRING.backSquareBracket}`;
  }

  getMatchCount(winningNumbersArray = []) {
    return this.#numbers.filter(number => winningNumbersArray.includes(number)).length;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }
}
export default Lotto;
