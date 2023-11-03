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
    const result = { first: 0, second: 0, third: 0, forth: 0, fifth: 0 };
    myLottoNumbers.forEach((lotto) => {
      const correctCount = lotto.filter((number) => this.#numbers.includes(number)).length;
      const bonus = lotto.includes(bonusNumber);
      if (correctCount === 3) {
        result['fifth'] += 1;
      } else if (correctCount === 4) {
        result['forth'] += 1;
      } else if (correctCount === 5) {
        if (bonus) result['second'] += 1;
        else result['third'] += 1;
      } else if (correctCount === 6) {
        result['first'] += 1;
      }
    });
    // Console.print(result);
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${result.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${result.forth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${result.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${result.first}개`);
    Console.print('총 수익률은 62.5%입니다.');
  }
}

export default Lotto;
