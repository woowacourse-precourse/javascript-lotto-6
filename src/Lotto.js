import Constant from "./utils/Constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!numbers.includes(",")) {
      throw new Error("[ERROR] 당첨번호는 , 로 구분해 입력해주세요");
    }
    numbers = numbers.split(",");
    if (numbers.length !== Constant.NUM_COUNT) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  returnNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
