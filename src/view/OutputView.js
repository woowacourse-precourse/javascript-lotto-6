import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, RANK, RESULT_MESSAGE } from '../constants/Constant.js';

const OutputView = {
  printLottoNumbers(lottoList) {
    const lottoMessage = lottoList
      .map((lotto) => `[${lotto.map((number) => number.toString()).join(', ')}]`)
      .join('\n');

    Console.print(`\n${lottoList.length}${MESSAGE.buyLotto}`);
    Console.print(lottoMessage);
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  printGameResult(totalRanks, profitRate) {
    const rewards = Object.values(RANK).map((rank) => rank.reward);

    Console.print(MESSAGE.winningStatistics);
    for (let i = 4; i >= 0; i -= 1) {
      Console.print(
        `${RESULT_MESSAGE[i]} (${this.formatReward(rewards[i])}원) - ${totalRanks[i]}개`,
      );
    }
    Console.print(`총 수익률은 ${this.formatReward(profitRate)}%입니다.`);
  },

  formatReward(reward) {
    const rewardString = String(reward);

    return rewardString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
};
export default OutputView;
