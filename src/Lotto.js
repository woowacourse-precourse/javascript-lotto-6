import { MissioinUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(
        "[ERROR] 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다."
      );
    }

    let numberCounts = {};
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1과 45 사이여야 합니다.");
      }
      if (numberCounts[num]) {
        throw new Error(
          "[ERROR] 로또 번호에 중복된 숫자가 있으면 예외가 발생한다."
        );
      }
      numberCounts[num] = (numberCounts[num] || 0) + 1;
    }
  }

  generateNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const generateNumbers =
        MissioinUtils.Console.Random.pickUniqueNumbersInRange(1, 45);
      if (!numbers.includes(generateNumbers)) {
        numbers.push(generateNumbers);
      }
    }
    return numbers;
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
