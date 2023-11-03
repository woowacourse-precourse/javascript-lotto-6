import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    // numbers : 당첨 번호
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    // if (numbers.map((number) => typeof number !== "number")) {
    //   throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    // }
  }

  printnumbers() {
    MissionUtils.Console.print(this.#numbers);
  }
}

const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
lotto.printnumbers();

export default Lotto;
