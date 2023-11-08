import { MissionUtils } from '@woowacourse/mission-utils';
import Validation from './Validation';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.validateRandomNumbers(numbers);
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  hasAnswer(answer) {
    return this.#numbers.includes(answer);
  }

  printLottos(numbers) {
    MissionUtils.Console.print(`[${numbers}]\n`);
  }
}

module.exports = Lotto;
