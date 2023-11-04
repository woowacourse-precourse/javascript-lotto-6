import { Random } from "@woowacourse/mission-utils";

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

  // TODO: 추가 기능 구현
  static generateNumbers(count) {
    const lottoNumbers = [];
    for (let i = 0; i < count; i++) {
      const uniqueNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
      lottoNumbers.push(sortedNumbers);
    }
    return lottoNumbers;
  }
}

export default Lotto;
