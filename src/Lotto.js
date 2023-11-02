import { ERROR } from "./Constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.lotto_count_error);
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
