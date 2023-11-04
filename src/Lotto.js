import { LOTTO_RULE } from "./constants/BusinessNumber.js";
import { LOTTO_ERROR } from "./constants/Messeage.js";
import CustomError from "./error/CustomError.js";
// numbers 에 문자숫자 배열을 넘겨줬지만 
// 예외 처리하는데에 무리가 없다
// 대소배교는 숫자로 인식함

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    this.#validateExtends(numbers);
  }

  #validateExtends(numbers) {
    const setNumbers = new Set(numbers);

    if (numbers.length !== setNumbers.size) {
      throw new CustomError(LOTTO_ERROR.luckyConflict);
    }

    numbers.forEach((number) => {
      if (number > LOTTO_RULE.maxNumber || number < LOTTO_RULE.minNumber) {
        throw new CustomError(LOTTO_ERROR.luckyRange);
      }
    })
  }

  getLuckyArray() {
    return this.#numbers.map((number) => Number(number));
  }
}

export default Lotto;
