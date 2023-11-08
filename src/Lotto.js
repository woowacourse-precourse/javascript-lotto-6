import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 여섯자리 숫자로 입력해 주십시오");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 중복된 숫자를 입력했습니다..');
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 1부터 45사이의 숫자만 입력 가능합니다.');
      }
    });
  }
    // TODO: 추가 기능 구현
  get numbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}


export default Lotto;
