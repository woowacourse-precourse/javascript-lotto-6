import { NUMBER } from '../Constant/stats.js';
import ERROR from '../Constant/Error.js';
import CustomError from '../Utils/CustomError.js';
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
    if (amount % NUMBER.LOTTERY_PRICE > 0) {
      throw new CustomError(ERROR.MONEY_UNIT);
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
    return this.#parseAsNumber(this.#amount) / NUMBER.LOTTERY_PRICE;
  }

  #parseAsNumber(string) {
    return Number(string);
  }
}

export default User;
