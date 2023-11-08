import { Console } from '@woowacourse/mission-utils';

class PrintLottoResult {
  #lottoResult;

  constructor(LOTTO_RESULT) {
    this.#lottoResult = LOTTO_RESULT;
  }

  printResult() {
    Console.print('');
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${this.#lottoResult.grade.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#lottoResult.grade.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#lottoResult.grade.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#lottoResult.grade.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#lottoResult.grade.first}개`);
    Console.print(`총 수익률은 ${this.#lottoResult.revenue.earningsRate}%입니다.`);
  }
}

export default PrintLottoResult;
