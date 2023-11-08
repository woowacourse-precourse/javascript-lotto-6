import { Console } from '@woowacourse/mission-utils';
import { outputString } from '../consts';

const OutputView = {
  print(string) {
    Console.print(string);
  },

  printPurchaseCount(count) {
    this.print(`${count}${outputString.purchaseCount}`);
  },

  printPublishedLotto(numbers) {
    this.print(numbers);
  },

  printWinningStatistics(ranks) {
    this.print(outputString.winningStatistics);
    this.print(outputString.devider);
    ranks.forEach((rank, i) => {
      const stringName = `lottoRank${5 - i}`;
      this.print(
        `${outputString[stringName]}${rank}${outputString.countUnit}\n`,
      );
    });
  },
};

export default OutputView;
