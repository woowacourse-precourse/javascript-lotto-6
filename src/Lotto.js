import { Random } from "@woowacourse/mission-utils";

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

  static generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default Lotto;
