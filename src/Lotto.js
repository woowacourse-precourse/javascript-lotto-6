import { Random } from '@woowacourse/mission-utils';
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
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR]로또 번호에 중복된 숫자가 있습니다.");
    }

    if (numbers.some(number => number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현

  static createRandomNumbers() {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < 6) {
      uniqueNumbers.add(Random.pickNumberInRange(1, 45));
    }
    return Array.from(uniqueNumbers);
  }

  lottoNumbers() {
    return [...this.#numbers];
  }

  static generateBonusNumber(numbers) {
    const remainingNumbers = Array.from({ length: 45 }, (_, index) => index + 1).filter(number => !numbers.includes(number));
    const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
    const bonusNumber = remainingNumbers[randomIndex];

    return [bonusNumber];
  }
}

export default Lotto; 