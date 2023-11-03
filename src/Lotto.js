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
    const tempArray = [];
    for (let i = 0; i < numbers.length; i++) {
      if (tempArray.includes(numbers[i]))
        throw new Error('[ERROR] 로또 번호 중 중복된 숫자가 있습니다.');
      else tempArray.push(numbers[i]);
    }
  }

  getLottoResult(myLottoNumbers, bonusNumber, purchasePrice) {
    const lottoResult = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

    myLottoNumbers.forEach((lotto) => {
      const correctCount = lotto.filter((number) => this.#numbers.includes(number)).length;
      const bonus = lotto.includes(bonusNumber);
      if (correctCount === 3) {
        lottoResult['fifth'] += 1;
      } else if (correctCount === 4) {
        lottoResult['fourth'] += 1;
      } else if (correctCount === 5) {
        if (bonus) lottoResult['second'] += 1;
        else lottoResult['third'] += 1;
      } else if (correctCount === 6) {
        lottoResult['first'] += 1;
      }
    });

    const rate = this.getProfitRate(lottoResult, purchasePrice);

    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${lottoResult.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResult.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResult.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult.first}개`);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }

  getProfitRate(lottoResult, purchasePrice) {
    let totalProfit = 0;

    totalProfit += lottoResult.first * 2000000000;
    totalProfit += lottoResult.second * 30000000;
    totalProfit += lottoResult.third * 1500000;
    totalProfit += lottoResult.fourth * 50000;
    totalProfit += lottoResult.fifth * 5000;

    return ((totalProfit / purchasePrice) * 100).toFixed(1);
  }
}

export default Lotto;
