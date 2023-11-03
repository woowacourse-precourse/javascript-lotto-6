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
    }
  }

  print() {
    Console.print(this.#numbers);
  }

  returnMatchedCount(winningNumbers, bonusNumber) {
    let matchedCount = 0;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        matchedCount++;
      }
    });
    if (this.#numbers.includes(bonusNumber)) {
      matchedCount++;
    }
    return matchedCount;
  }
}

export default Lotto;
