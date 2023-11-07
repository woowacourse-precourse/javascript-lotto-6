import { Console } from "@woowacourse/mission-utils";
import {
  USER_INPUT,
  ERROR_MESSAGE,
  DELIMITER,
  LOTTO_LENGTH,
  MIN_NUMBER,
  MAX_NUMBER
} from './constants.js'

class TargetNumber {
  #targetNumber;

  constructor() {
    this.#targetNumber = [];
  }

  getTargetNumber() {
    return this.#targetNumber;
  }

  hasNumber(number) {
    return this.#targetNumber.includes(number);
  }
  
  async setTargetNumber() {
    const input = await Console.readLineAsync(USER_INPUT.TARGET_NUMBER);
    const targetNumber = input.split(DELIMITER).map((number) => Number(number));

    try{
      this.checkTargetNumberValidity(targetNumber);
      this.#targetNumber = targetNumber;
    }catch (error){
      Console.print(error);
    }
  }

  checkTargetNumberValidity(targetNumber) {
    if (targetNumber.length !== LOTTO_LENGTH) throw ERROR_MESSAGE.TARGET_NUM_SIX;

    if ([...new Set(targetNumber)].length !== LOTTO_LENGTH) throw ERROR_MESSAGE.TARGET_NUM_SAME;

    targetNumber.forEach((number) => {
      if (number < MIN_NUMBER || number > MAX_NUMBER) throw ERROR_MESSAGE.TARGET_NUM_MIN_MAX;

      if (isNaN(number)) throw ERROR_MESSAGE.TARGET_NUM_STRING;
    })
  }
}

export default TargetNumber;