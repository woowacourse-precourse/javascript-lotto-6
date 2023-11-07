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
  }

  printLottoNumber() {
    this.#numbers.sort((a,b) => a - b);
    const numbersStr = this.#numbers.join(', ')
    MissionUtils.Console.print(`[${numbersStr}]`)
  }

}

export default Lotto;
