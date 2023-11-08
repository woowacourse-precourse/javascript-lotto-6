import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/messages.js';

class OutputView {
  printAllLottos(lottoList) {
    Console.print(`\n${lottoList.length}${MESSAGE.bought}`);
    lottoList.forEach((lotto) => {
      Console.print(lotto.getNumber());
    });
  }

  printresult(winnerList) {
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${winnerList.fifth}개
4개 일치 (50,000원) - ${winnerList.fourth}개
5개 일치 (1,500,000원) - ${winnerList.third}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${winnerList.second}개
6개 일치 (2,000,000,000원) - ${winnerList.first}개
  `);
  }
}
export default OutputView;
