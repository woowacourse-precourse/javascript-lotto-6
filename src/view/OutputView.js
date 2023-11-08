import { Console } from '@woowacourse/mission-utils';
import { PRIZE } from '../constants/prize.js';

export default class OutputView {
  static print(message) {
    Console.print(message);
  }

  static printLottoList(lottoList) {
    this.print(`\n${lottoList.length}개를 구매했습니다.`);
    lottoList.forEach((lotto) => this.print(lotto.getLottoNumbers()));
  }

  static printPrizeResult(lotteryResult, earningsRate) {
    this.print(`\n당첨 통계`);
    this.print(`---`);
    const list = ['fifth', 'fourth', 'third', 'second', 'first'];
    list.forEach((key) => {
      const { message } = PRIZE[key];
      const count = lotteryResult.get(key);
      this.print(`${message}${count}개`);
    });
    this.print(`총 수익률은 ${earningsRate}%입니다.`);
  }
}
