const {Console} = require('@woowacourse/mission-utils');

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

  printNumbers() {
    this.sortNumbers();

    Console.print('[${this.#numbers.join(', ')}]');
  }

  sortNumbers() {
    this.#numbers.sort((a,b) => a - b);
  }

  getRank(winningNumbers, bonusNumber) {
    let count = 0;

    this.#numbers.forEach((number) => {
      if(winningNumbers.includes(number)) count += 1;
    });

    if (count === 6) return PLACE.FIRST;

    if (count === 5 && this.#numbers.includes(bonusNumber)) return PLACE.SECOND;

    return 8 - count;
  }
}

export default Lotto;
