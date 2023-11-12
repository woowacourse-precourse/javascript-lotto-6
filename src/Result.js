import { Console } from '@woowacourse/mission-utils';

class Result {
  #results;
  #purchaseAmount;

  constructor(results, purchaseAmount) {
    this.#results = results;
    this.#purchaseAmount = purchaseAmount;
  }

  print() {
    Console.print('\n당첨 통계');
    Console.print('---');
    this.#printMatchCount('3개 일치 (5,000원)', this.#results[3]);
    this.#printMatchCount('4개 일치 (50,000원)', this.#results[4]);
    this.#printMatchCount('5개 일치 (1,500,000원)', this.#results[5]);
    this.#printMatchCount(
      '5개 일치, 보너스 볼 일치 (30,000,000원)',
      this.#results['5+'],
    );
    this.#printMatchCount('6개 일치 (2,000,000,000원)', this.#results[6]);
    this.#printEarningsRatio();
  }

  #printMatchCount(message, count) {
    Console.print(`${message} - ${count}개`);
  }

  #printEarningsRatio() {
    const totalPrize =
      this.#results[3] * 5000 +
      this.#results[4] * 50000 +
      this.#results[5] * 1500000 +
      this.#results['5+'] * 30000000 +
      this.#results[6] * 2000000000;
    let earningsRatio = (totalPrize / this.#purchaseAmount) * 100;
    earningsRatio = parseFloat(earningsRatio.toFixed(2));

    if (isNaN(earningsRatio)) {
      throw new Error('[ERROR] 수익률 계산 중 오류가 발생했습니다.');
    }
    Console.print(`총 수익률은 ${earningsRatio}%입니다.`);
  }
}

export default Result;
