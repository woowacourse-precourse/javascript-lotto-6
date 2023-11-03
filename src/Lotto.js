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

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중북이 있으면 안됩니다.');
    }
  }

  print() {
    Console.print(`"[${this.#numbers.join(', ')}]"`);
  }

  returnMatchedCount(winningNumbers, bonusNumber) {
    let matchedCount = 0;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        matchedCount++;
      }
    });

    // 6자리가 다 맞으면 +1을 합니다.
    // 7이상일 경우 보너스 숫자 제외 6개 일치입니다.
    if (matchedCount === 6) {
      matchedCount++;
    }

    if (this.#numbers.includes(bonusNumber)) {
      matchedCount++;
    }
    return matchedCount;
  }
}

export default Lotto;
