import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    try {
      if (numbers.length !== 6) {
        throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
      }
  
      const uniqueNumbers = new Set(numbers);
      if (uniqueNumbers.size !== numbers.length) {
        throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
      }
  
      for (const number of numbers) {
        if (!Number.isInteger(number) || number < 1 || number > 45) {
          throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
        }
      }
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      // 에러 발생 후 다시 입력 요청
      return;
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
  }
}

export default Lotto;
