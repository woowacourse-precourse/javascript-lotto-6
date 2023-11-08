import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.validateIsDuplicated(numbers);
    this.validateIsIncorrecRage(numbers);
    this.validateIsNotNumber(numbers);
    this.#numbers = numbers;
  }
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateIsDuplicated(numbers) {
    if (new Set(numbers).size < numbers.length) {
      throw new Error(ERROR_MESSAGE.isDuplicatedNumber);
    }
  }

  validateIsNotNumber(numbers) {
    const verifyNumber = /^[0-9]+$/;
    for (let i = 0; i < numbers.length; i++) {
      if (verifyNumber.test(numbers[i]) === false) {
        throw new Error(`${ERROR_MESSAGE.isNotNumber}`);
      }
    }
  }

  validateIsIncorrecRage(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 45 || numbers[i] < 1) {
        throw new Error(`${ERROR_MESSAGE.isIncorrecRage}`);
      }
    }
  }
}

export default Lotto;
