import { Console } from '@woowacourse/mission-utils';
import BonusPrize from '../domain/BonusPrize';

const OutputView = {
  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  },

  printLottoResult(receivedPrizes) {
    Console.print('당첨 통계');
    Console.print('---');
    [...receivedPrizes.reverse()].forEach(({ prize, cnt }) => {
      const explanation =
        prize.constructor === BonusPrize
          ? `${prize.getMatchLottoCnt()}개 일치, 보너스 볼 일치`
          : `${prize.getMatchLottoCnt()}개 일치`;

      Console.print(
        `${explanation} (${prize.getRewards().toLocaleString()}원) - ${cnt}개`
      );
    });
  },

  printProfitRate(profitRate) {
    Console.print(`총 수익률은 ${(profitRate * 100).toFixed(1)}%입니다.`);
  },
};

export default OutputView;
