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

    const set = new Set(numbers);
    if (set.size !== Constant.NUM_COUNT) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 6개의 숫자입니다.");
    }

    numbers.forEach((number) => {
      if (!Constant.REGEX_IS_NUM.test(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자 이외에 입력할 수 없습니다");
      }
      if (number < Constant.MIN || number > Constant.MAX) {
        throw new Error("[ERROR] 로또 번호는 1이상 45이하의 숫자여야 합니다");
      }
    });
  }

  returnNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
