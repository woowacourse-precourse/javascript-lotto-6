import { MissionUtils } from '@woowacourse/mission-utils';
import { STRINGS } from './constants/STRINGS';
import Validation from './Validation';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#printLottos(numbers);
  }

  #validate(numbers) {
    Validation.validateNumbersLength(numbers);
    Validation.validateRepeatedNumbers(numbers);

  }

  #printLottos(numbers){
    Console.print(`[${numbers}]\n`);
  }
}

export default Lotto;
