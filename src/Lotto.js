import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const nonDuplicateNumbers = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (!numbers.every(this.isValidNumber) || !this.areAllIntegers(numbers)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.');
    }
    if (nonDuplicateNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 중복된 값이 있습니다.');
    }
  }

  isValidNumber(number) {
    return !isNaN(number) && number >= 1 && number <= 45;
  }

  areAllIntegers(numbers) {
    return numbers.every(number => Number.isInteger(number));
  }

  isBonusNumberDuplicate(bonus) {
    return this.#numbers.includes(bonus);
  }

  matchLotto(winningNumbers, bonusNumber) {
    const matchingNumbers = this.#numbers.filter(number => winningNumbers.includes(number));
    const matchingCount = matchingNumbers.length;

    if (matchingCount == 3) return 'three';
    if (matchingCount == 4) return 'four';
    if (matchingCount == 6) return 'all';
    if (matchingCount == 5 && winningNumbers.includes(bonusNumber)) return 'bonus';
    if (matchingCount == 5) return 'five';
  
    return 'zero';
  }
}

export default Lotto;
