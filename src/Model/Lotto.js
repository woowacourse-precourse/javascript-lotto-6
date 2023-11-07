import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers; // 당첨 번호?

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현

  // 당첨 통계 계산
  calculatePrizes(lottoNumbers, bonusNumber) {
    const matchCount = this.countMatchNumbers(lottoNumbers);
    const bonus = this.hasBonusNumber(bonusNumber);

    let prize = 0;

    if (matchCount === 6) {
      prize = bonus ? 5.5 : 6;
    } else if (matchCount === 5 && bonus) {
      prize = 5.5;
    } else if ([3, 4, 5].includes(matchCount)) {
      prize = matchCount;
    }

    return prize;
  }

  countMatchNumbers(lottoNumbers) {
    let count = 0;
    for (let i = 0; i < this.#numbers.length; i++) {
      if (lottoNumbers.includes(this.#numbers[i])) {
        count++;
      }
    }
    return count;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  getNumber() {
    return this.#numbers;
  }
  // 상금 반환
  getPrizeAmount() {}
}

export default Lotto;
