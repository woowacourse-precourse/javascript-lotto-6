import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const doesNumberExist = new Map();
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (const number of numbers) {
      if (doesNumberExist.has(number)) {
        throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
      }
      doesNumberExist.set(number, true);
    }
  }

  // TODO: 추가 기능 구현
  printNumbers() {
    Console.print(`[${this.#numbers.map((number) => number).join(", ")}]`);
  }

  compareNumbers(winningNumbers, bonusNumber) {
    const doesNumberExist = new Map();
    const compareResult = { sameNumberCount: 0, bonusIsSame: false };
    for (const number of this.#numbers) {
      doesNumberExist.set(number, true);
    }
    for (const number of winningNumbers) {
      if (doesNumberExist.has(number)) {
        compareResult.sameNumberCount++;
      }
    }
    if (doesNumberExist.has(bonusNumber)) {
      compareResult.bonusIsSame = true;
    }
    return compareResult;
  }
}

export default Lotto;
