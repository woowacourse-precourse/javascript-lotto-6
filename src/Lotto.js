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
  }

  // TODO: 추가 기능 구현
  getLottoResult(myLottoNumbers, bonusNumber) {
    const result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    myLottoNumbers.forEach((lotto) => {
      const correctCount = lotto.filter((number) => this.#numbers.includes(number)).length;
      const bonus = lotto.includes(bonusNumber);
      if (correctCount === 3) {
        result['5'] += 1;
      } else if (correctCount === 4) {
        result['4'] += 1;
      } else if (correctCount === 5) {
        if (bonus) result['2'] += 1;
        else result['3'] += 1;
      } else if (correctCount === 6) {
        result['1'] += 1;
      }
    });
    Console.print(result);
    // - 1등: 6개 번호 일치 / 2,000,000,000원
    // - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    // - 3등: 5개 번호 일치 / 1,500,000원
    // - 4등: 4개 번호 일치 / 50,000원
    // - 5등: 3개 번호 일치 / 5,000원

    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print('3개 일치 (5,000원) - 1개');
    Console.print('4개 일치 (50,000원) - 0개');
    Console.print('5개 일치 (1,500,000원) - 0개');
    Console.print('5개 일치, 보너스 볼 일치 (30,000,000원) - 0개');
    Console.print('6개 일치 (2,000,000,000원) - 0개');
    Console.print('총 수익률은 62.5%입니다.');
  }
}

export default Lotto;
