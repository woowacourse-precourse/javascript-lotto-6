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

  getSortedNumbers() {
    const sortedNumbers = this.#numbers.sort((a, b) => a - b);
    return sortedNumbers;
  }

  displayNumbers() {
    const lotto = this.getSortedNumbers();

    const lottoString = `[${lotto.join(", ")}]`;
    MissionUtils.Console.print(lottoString);
  }
}

export default Lotto;
