import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSEGE, RESULT_MESSEGE } from '../constants/messages.js';

const purchase = (amount) => `\n${amount}개를 구매했습니다.`;
const formatLotto = (lotto) => `[${lotto.join(', ')}]`;
const profitRate = (rate) => `총 수익률은 ${rate}%입니다.`;

class Announcer {
  printLottoBundle(lottoBundle, amount) {
    const lottoList = lottoBundle.getLottoBundle();

    Console.print(purchase(amount));
    lottoList.forEach((lotto) => {
      Console.print(formatLotto(lotto.getLotto()));
    });
  }

  printPrize(analyzer) {
    Console.print(PROMPT_MESSEGE.lottoResult);

    const rankedLotto = analyzer.getRankedLotto();
    const rank = ['fifth', 'fourth', 'third', 'second', 'first'];
    RESULT_MESSEGE.forEach((messege, idx) => {
      Console.print(`${messege + rankedLotto[rank[idx]]}개`);
    });
    Console.print(profitRate(analyzer.calculateProfitRate()));
  }
}

export default Announcer;
