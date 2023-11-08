import { Console } from '@woowacourse/mission-utils';
import formatGamePrizes from '../utils/formatGamePrizes.js';

class OutputView {
  print(message = '') {
    Console.print(message);
  }

  /**
   * 당첨금을 받을 수 있는 로또의 오브젝트를 인자로 받아 템플릿 형식에 맞춰 출력한다.
   * @param {{ three: number, four: number, five: number, bonus: number, six: number }} matchLottoCount -각 key는 일치하는 숫자의 개수를 의미한다.
   */
  printLottoResult(matchLottoCount) {
    this.print(formatGamePrizes(matchLottoCount));
  }

  printTotalProfit(profit = '0.0%') {
    this.print(`총 수익률은 ${profit}입니다.`);
  }
}

export default OutputView;
