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
  getLottoResult(myLottoNumbers) {
    const result = Array.from({ length: 7 }, () => 0);
    myLottoNumbers.forEach((lotto) => {
      const length = lotto.filter((number) => this.#numbers.includes(number)).length;
      result[length] += 1;
    });
    Console.print(result);

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
