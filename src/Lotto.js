import { MissionUtils } from "@woowacourse/mission-utils";

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
    numbers.forEach((num) => {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.");
      }
    });
  
    const set = new Set(numbers);
    const arr = Array.from(set);
    if (arr.length !== 6) {
      throw new Error("[ERROR] 서로 중복되지 않는 숫자를 입력해주세요.");
    }
  }
}

export default Lotto;
