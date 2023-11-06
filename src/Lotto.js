import { Console } from '@woowacourse/mission-utils';
/* eslint-disable no-plusplus */
class Lotto {
  #numbers;

  #isBonus;

  #numOfCorrect;

  constructor(numbers) {
    Lotto.#printLottoNumber(numbers);
    Lotto.#validate(numbers);
    this.#numbers = numbers;
    this.#numOfCorrect = 0;
    this.#isBonus = false;
  }

  static #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복된 숫자가 있으면 안됩니다.');
    }
  }

  // TODO: 추가 기능 구현
  checkLotto(winningNumbers, bonusNumber) {
    winningNumbers.forEach(
      (number) => this.#numbers.includes(number) && this.#numOfCorrect++
    );
    if (this.#numbers.includes(bonusNumber)) this.#isBonus = true;
    return this;
  }

  getRank(winningNumbers, bonusNumber) {
    this.#initCheck();
    this.checkLotto(winningNumbers, bonusNumber);

    switch (this.#numOfCorrect) {
      case 6:
        return '1등';
      case 5 && this.#isBonus === true:
        return '2등';
      case 5 && this.#isBonus === false:
        return '3등';
      case 4:
        return '4등';
      case 3:
        return '5등';
      default:
        return null;
    }
  }

  #initCheck() {
    this.#isBonus = false;
    this.#numOfCorrect = 0;
  }

  static #printLottoNumber(numbers) {
    Console.print(`[${numbers.join(', ')}]`);
  }
}

export default Lotto;
