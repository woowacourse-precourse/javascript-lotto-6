import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    } else if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 로또는 중복된 번호가 나올 수 없습니다.');
    }
  }

  #compareNumber(a, b) {
    return a - b;
  }

  // TODO: 추가 기능 구현
  printNumbers() {
    const sortedNumbers = this.#numbers.sort(this.#compareNumber);
    // "[1, 8, 11, 31, 41, 42]"
    Console.print(
      `[${sortedNumbers[0]}, ${sortedNumbers[1]}, ${sortedNumbers[2]}, ${sortedNumbers[3]}, ${sortedNumbers[4]}, ${sortedNumbers[5]}]`
    );
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
