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
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
    for (const number of numbers) {
      if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
      }
    }
  }

  getNumbers() {
    return [...this.#numbers]; // 배열 복사본을 반환하여 원본을 보호합니다.
  }

  compare(winningNumbers, bonusNumber) {
    const userNumbers = new Set(this.#numbers);
    const matchingNumbers = winningNumbers.filter((num) => userNumbers.has(num));
    const isBonusNumberMatch = this.#numbers.includes(bonusNumber);
    const matchingCount = matchingNumbers.length;
    // Console.print(userNumbers);
    // Console.print(matchingNumbers);
    // Console.print(isBonusNumberMatch);
    // Console.print(matchingCount);
    if (matchingCount === 6) {
      return '6개 일치 (2,000,000,000원)';
    } if (matchingCount === 5 && isBonusNumberMatch) {
      return '5개 일치, 보너스 볼 일치 (30,000,000원)';
    } if (matchingCount === 5) {
      return '5개 일치 (1,500,000원)';
    } if (matchingCount === 4) {
      return '4개 일치 (50,000원)';
    } if (matchingCount === 3) {
      return '3개 일치 (5,000원)';
    }
    return '0';

    // switch (matchingCount) {
    //   case 6:
    //     return '6개 일치 (2,000,000,000원)';
    //   case 5:
    //     if (isBonusNumberMatch) {
    //       return '5개 일치, 보너스 볼 일치 (30,000,000원)';
    //     }
    //     return '5개 일치 (1,500,000원)';
    //   case 4:
    //     return '4개 일치 (50,000원)';
    //   case 3:
    //     return '3개 일치 (5,000원)';
    //   default:
    //     return '0';
    // }
  }
}

export default Lotto;
