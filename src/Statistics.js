import { Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE, PRIZE_MONEY } from './constant.js';

class Statistics {
  #first;

  #second;

  #third;

  #fourth;

  #fifth;

  #earningRate;

  constructor({ winningNumbers, bonusNumber }, lottos) {
    this.#first = 0;
    this.#second = 0;
    this.#third = 0;
    this.#fourth = 0;
    this.#fifth = 0;
    this.#earningRate = 0;
    this.#calculateResult(winningNumbers, bonusNumber, lottos);
    this.#calculateEarningRate(lottos.length);
  }

  #calculateEarningRate(numberOfLotto) {
    const earningRate = (
      ((this.#first * PRIZE_MONEY.FIRST +
        this.#second * PRIZE_MONEY.SECOND +
        this.#third * PRIZE_MONEY.THIRD +
        this.#fourth * PRIZE_MONEY.FOURTH +
        this.#fifth * PRIZE_MONEY.FIFTH) /
        (numberOfLotto * 1000)) *
      100
    ).toFixed(1);
    // .0로 끝나는 경우 Number 변환 시 뒤에 0이 사라지는 것을 방지
    if (earningRate.includes('.0')) {
      this.#earningRate = `${Number(earningRate).toLocaleString('ko-KR')}.0`;
      return;
    }
    this.#earningRate = Number(earningRate).toLocaleString('ko-KR');
  }

  #calculateResult(winningNumbers, bonusNumber, lottos) {
    lottos.forEach((lotto) => {
      const score = lotto.filter((number) => winningNumbers.includes(number)).length;
      if (score === 6) this.#first += 1;
      else if (score === 5 && lotto.includes(bonusNumber)) this.#second += 1;
      else if (score === 5) this.#third += 1;
      else if (score === 4) this.#fourth += 1;
      else if (score === 3) this.#fifth += 1;
    });
  }

  printStatistics() {
    Console.print(LOTTO_MESSAGE.WINNING_STATISTICS);
    Console.print(`3개 일치 (5,000원) - ${this.#fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#first}개`);
    Console.print(`총 수익률은 ${this.#earningRate}%입니다.`);
  }
}

export default Statistics;
