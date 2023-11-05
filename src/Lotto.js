import { ERROR } from "./Constants/Constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.lotto_num_error);
    }
    if (
      !numbers.every(
        (number) => Number.isInteger(number) && number >= 1 && number <= 45
      )
    ) {
      throw new Error(ERROR.lotto_num_error);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR.lotto_num_error);
    }
  }

  checkLottoNumbers(winNumber, bonusNumber) {
    const myNumbers = this.#numbers;
    let matchCount = 0;
    myNumbers.forEach((myNumber) => {
      if (winNumber.includes(myNumber)) {
        matchCount += 1;
      }
    });
    if (matchCount == 5 && winNumber.includes(bonusNumber)) {
      matchCount += 2;
    }
    return matchCount;
  }
}

export default Lotto;
