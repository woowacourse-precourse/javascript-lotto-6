import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSEGE, RESULT_MESSEGE } from '../constants/messages.js';
import { RANK } from '../constants/lottoConstants.js';

const purchase = (amount) => `\n${amount}개를 구매했습니다.`;
const formatLotto = (lotto) => `[${lotto.join(', ')}]`;
const formatPrize = (message, count) => `${message}${count}개`;
const formatProfitRate = (rate) => `총 수익률은 ${rate}%입니다.`;

class Announcer {
  printLottoBundle(lottoBundle) {
    const lottoList = lottoBundle.getLottoBundle();
    Console.print(purchase(lottoList.length));
    lottoList.forEach((lotto) => {
      Console.print(formatLotto(lotto.getLotto()));
    });
  }

  printResult(analyzer) {
    Console.print(PROMPT_MESSEGE.lottoResult);
    const rankedLotto = analyzer.getRankedLotto();
    this.#printPrize(rankedLotto);
    Console.print(formatProfitRate(analyzer.calculateProfitRate()));
  }

  #printPrize(rankedLotto) {
    const rankKeys = Object.keys(RANK);
    RESULT_MESSEGE.forEach((message, index) => {
      const rank = rankKeys[index];
      const count = rankedLotto[rank];
      Console.print(formatPrize(message, count));
    });
  }
}

export default Announcer;
