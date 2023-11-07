import { MissionUtils } from "@woowacourse/mission-utils";
class Lotto {
  #numbers;

  constructor(numbers) {
    // numbers 입력받는 로또 당첨번호
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
