import { Console, MissionUtils } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const nonDuplicateNumbers = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
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
  
    let results = {
      three: 0,
      four: 0,
      five: 0,
      bonus: 0,
      all: 0,
    };
  
    switch (matchingCount) {
      case 3:
        results.three++;
        break;
      case 4:
        results.four++;
        break;
      case 5:
        if (this.#numbers.includes(bonusNumber)) {
          results.bonus++;
        } else {
          results.five++;
        }
        break;
      case 6:
        results.all++;
        break;
    }
  
    return results;
  }
  
  printResult(results) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${results.three}개`);
    Console.print(`4개 일치 (50,000원)  - ${results.four}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원)  - ${results.bonus}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results.five}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results.all}개`);
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
