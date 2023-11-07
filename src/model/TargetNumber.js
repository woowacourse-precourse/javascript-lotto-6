import { Console } from "@woowacourse/mission-utils";
import {
  DELIMITER,
  LOTTO_LENGTH,
  MIN_NUMBER,
  MAX_NUMBER
} from '../constants/constants.js'
import InputView from "../view/inputView.js";

class TargetNumber {
  #targetNumber;

  #TARGET_NUM_SIX = '[ERROR] 당첨 번호는 6개여야 합니다.';
  #TARGET_NUM_MIN_MAX = '[ERROR] 당첨 번호는 1에서 45사이의 정수여야 합니다.';
  #TARGET_NUM_STRING = '[ERROR] 당첨 번호는 문자가 아닌 숫자를 입력해야 합니다.';
  #TARGET_NUM_SAME = '[ERROR] 당첨 번호는 중복되지 않아야 합니다.';

  constructor() {
    this.#targetNumber = [];
  };

  getTargetNumber() {
    return this.#targetNumber;
  };

  hasNumber(number) {
    return this.#targetNumber.includes(number);
  };
  
  async setTargetNumber() {
    const targetNumber = await InputView.inputTargetNumber();

    try {
      this.checkTargetNumberValidity(targetNumber);
      this.#targetNumber = targetNumber;
    } catch (error){
      Console.print(error);
    }
  };

  checkTargetNumberValidity(targetNumber) {
    if (targetNumber.length !== LOTTO_LENGTH) {
      throw this.#TARGET_NUM_SIX;
    }

    if ([...new Set(targetNumber)].length !== LOTTO_LENGTH) {
      throw this.#TARGET_NUM_SAME;
    }

    targetNumber.forEach((number) => {
      if (number < MIN_NUMBER || number > MAX_NUMBER) {
        throw this.#TARGET_NUM_MIN_MAX;
      }

      if (isNaN(number)) {
        throw this.#TARGET_NUM_STRING;
      }
    });
  };
}

export default TargetNumber;
