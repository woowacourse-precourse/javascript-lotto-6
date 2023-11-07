import { Console } from '@woowacourse/mission-utils';
import { CONSTANTS } from './constants/lotto.js';

class Lotto {
  #numbers;

  #isWonBonus;

  #numOfCorrect;

  #isChecked;

  constructor(numbers) {
    Lotto.#printLottoNumber(numbers);
    Lotto.#validateNumbers(numbers);
    this.#numbers = numbers;
    this.#numOfCorrect = 0;
    this.#isWonBonus = false;
    this.#isChecked = false;
  }

  // TODO: 추가 기능 구현
  checkLotto(winningNumbers, bonusNumber) {
    this.#isChecked = true;
    this.#numOfCorrect = 0;
    this.#isWonBonus = false;

    winningNumbers.forEach((number) => {
      if (this.#numbers.includes(number)) this.#numOfCorrect += 1;
    });
    if (this.#numbers.includes(bonusNumber)) this.#isWonBonus = true;

    return this;
  }

  getRank() {
    this.#validateCheck();
    switch (this.#numOfCorrect) {
      case 6:
        return '1등';
      case 5:
        return this.#isWonBonus ? '2등' : '3등';
      case 4:
        return '4등';
      case 3:
        return '5등';
      default:
        return null;
    }
  }

  static #printLottoNumber(numbers) {
    Console.print(`[${numbers.join(', ')}]`);
  }

  static #validateNumbers(numbers) {
    if (numbers.length !== CONSTANTS.LENGTH_OF_LOTTO) {
      throw new Error(
        `[ERROR] 로또 번호는 ${CONSTANTS.LENGTH_OF_LOTTO}개여야 합니다.`
      );
    }

    if (new Set(numbers).size !== CONSTANTS.LENGTH_OF_LOTTO) {
      throw new Error('[ERROR] 로또 번호는 중복된 숫자가 있으면 안됩니다.');
    }
  }

  #validateCheck() {
    if (!this.#isChecked)
      throw new Error(
        '[ERROR] 로또 순위를 알기위해서는 채점을 먼저 해야합니다,'
      );
  }
}

export default Lotto;
