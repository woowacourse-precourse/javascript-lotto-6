import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/message.js';
import { RANK, RANK_FOR_PRINT, RANK_TITLE } from '../constant/constant.js';

const OutputView = {
  printPurchaseQuantity(quantity) {
    Console.print(`\n${MESSAGE.purchasedQuantity(quantity)}`);
  },

  printLottoNumbers(lottoList) {
    lottoList.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
    Console.print('');
  },

  printRankCounts(rankCountList) {
    Console.print(`\n${MESSAGE.winningStatistics}\n${MESSAGE.line}`);

    RANK_FOR_PRINT.forEach((rank) => {
      if (rank === RANK_TITLE.second) {
        this.printBonusRankResult(rankCountList, rank);
        return;
      }
      this.printRankResult(rankCountList, rank);
    });
  },

  printRankResult(rankCountList, rank) {
    Console.print(
      MESSAGE.rankResult(
        RANK[rank].match,
        RANK[rank].prize.toLocaleString('ko-KR'),
        rankCountList[rank],
      ),
    );
  },

  printBonusRankResult(rankCountList, rank) {
    Console.print(
      MESSAGE.bonusRankResult(
        RANK[rank].match,
        RANK[rank].prize.toLocaleString('ko-KR'),
        rankCountList[rank],
      ),
    );
  },

  printProfitRate(profitRate) {
    Console.print(MESSAGE.totalProfit(profitRate));
  },
};

export default OutputView;
