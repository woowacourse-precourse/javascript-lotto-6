import { ERROR_MSG } from "./constants/constants.js";

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

    // TODO: 추가 기능 구현
    numbers.map((number) => {
      // results 숫자 검사
      if (isNaN(number)) {
        throw new Error(ERROR_MSG.NUMBER_ERROR);
      }

      // results 범위 검사
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MSG.NUMBER_RANGE);
      }
      // resuls 중복 검사
      if (numbers.filter((n) => n === number).length > 1) {
        throw new Error(ERROR_MSG.NUMBER_RANGE);
      }
    });
  }
}

export default Lotto;
