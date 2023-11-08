import {
  validateNumberLength,
  checkValidateNumbers,
} from '../Utils/validation.js';

class User {
  #amount;

  constructor(amount) {
    this.#validateAmount(amount);
    this.#amount = amount;
  }

  #validateAmount(amount) {
    if (amount % 1000 > 0) {
      throw new Error('[ERROR] 1000원 단위로 입력하세요.');
    }
  }

  getLotteryNumber(lotteryInput) {
    const inputArr = this.#divdeEach(lotteryInput);
    validateNumberLength(inputArr);

    return this.#convertToNumber(inputArr);
  }

  #divdeEach(input) {
    return input.split(',');
  }

  #convertToNumber(array) {
    const result = array.map((el) => {
      checkValidateNumbers(el);

      return Number(el);
    });

    return result;
  }

  getNumberofPurchase() {
    return this.#parseAsNumber(this.#amount) / 1000;
  }

  #parseAsNumber(string) {
    return Number(string);
  }
}

export default User;
