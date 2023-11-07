import { Console } from '@woowacourse/mission-utils';
import roundAndFormatWithComma from '../util/roundAndFormatWithComma.js';

const OutputView = {
  printTotalLottos(lottos) {
    OutputView.printLottoPurchaceQuantity(lottos.length);
    OutputView.printLottos(lottos);
  },

  printLottoPurchaceQuantity(lottoQuantity) {
    OutputView.print(`\n${lottoQuantity}개를 구매했습니다.`);
  },

  printLottos(lottos) {
    const result = [...lottos].reduce(
      (totalLottos, currentLotto) => (totalLottos += `[${currentLotto.join(', ')}]\n`),
      ''
    );

    OutputView.print(result);
  },

  printResult(result) {
    const [statistics, profitRate] = result;
    const prizeMessages = OutputView.formatPrizeMessages(statistics);
    const profitRateMessage = OutputView.formatProfitRate(profitRate);

    OutputView.print(`\n당첨 통계\n---`);
    OutputView.print(prizeMessages);
    OutputView.print(profitRateMessage);
  },

  formatPrizeMessages(statistics) {
    return statistics
      .map((singleStatistics, idx) => {
        const { matchCriteria, prize, matchedNumber } = singleStatistics;
        if (idx === 3) {
          return `${matchCriteria}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${matchedNumber}개`;
        }
        return `${matchCriteria}개 일치 (${prize.toLocaleString()}원) - ${matchedNumber}개`;
      })
      .join('\n');
  },

  formatProfitRate(profitRate) {
    const formattedProfitRate = roundAndFormatWithComma(profitRate, 1);
    return `총 수익률은 ${formattedProfitRate}%입니다.`;
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
