import { MissionUtils } from '@woowacourse/mission-utils';
import ExceptionList from './ExceptionList.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.printNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const exception = new ExceptionList();
    exception.sameNumberError(numbers);
    numbers.forEach((number) => {
      exception.isNaNError(number);
      exception.numberRangeError(number);
    });
  }
  printNumbers() {
    const stringNumber = `[${this.#numbers.join(', ')}]`;
    MissionUtils.Console.print(stringNumber);
  }
  compareWinNumbers(winNumber) {
    let winCount = 0;
    winNumber.forEach((num) => {
      if (this.#numbers.includes(Number(num))) {
        winCount += 1;
      }
    });
    return winCount;
  }
  compareBonusNumber(bonusNumber) {
    return this.#numbers.includes(Number(bonusNumber));
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
