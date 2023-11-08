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
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    Validation.validateNumbersLength(numbers);
    Validation.validateRepeatedNumbers(numbers);

  }

  // TODO: 추가 기능 구현
  #printLottos(numbers){
    Console.print(`[${numbers}]\n`);
  }
}

export default Lotto;
