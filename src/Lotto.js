import { Random, Console } from '@woowacourse/mission-utils';
class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현

  static createRandomNumbers() {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < 6) {
      uniqueNumbers.add(Random.pickNumberInRange(1, 45));
    }

    const remainingNumbers = Array.from({ length: 45 }, (_, index) => index + 1).filter(number => !uniqueNumbers.has(number));
    const bonusNumber = remainingNumbers[Math.floor(Math.random() * remainingNumbers.length)];

    return { numbers: Array.from(uniqueNumbers), bonusNumber };
  }

  getNumbers() {
    return [...this.#numbers];
  }

  getBonusNumber() {
    return [this.#bonusNumber];
  }
}

export default Lotto; 