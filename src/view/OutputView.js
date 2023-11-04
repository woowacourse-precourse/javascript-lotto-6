import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, RANK } from '../constants/Constant.js';

const OutputView = {
  printLottoNumbers(count, message) {
    Console.print(`\n${count}${MESSAGE.buyLotto}`);
    Console.print(message);
  },

  printMessage(message) {
    Console.print(message);
  },

  printGameResult(totalRanks, profitRate) {
    Console.print(MESSAGE.winningStatistics);
    Console.print(
      `${RANK.fourth.match}개 일치 (${this.formatReward(RANK.reward[4])}원) - ${totalRanks[4]}개`,
    );
    Console.print(
      `${RANK.third.match}개 일치 (${this.formatReward(RANK.reward[3])}원) - ${totalRanks[3]}개`,
    );
    Console.print(
      `${RANK.second.match}개 일치 (${this.formatReward(RANK.reward[2])}원) - ${totalRanks[2]}개`,
    );
    Console.print(`${RANK.second.match}개 일치, 보너스 볼 일치 (${this.formatReward(
      RANK.reward[1],
    )}원) - ${totalRanks[1]}개
    `);
    Console.print(
      `${RANK.first.match}개 일치 (${this.formatReward(RANK.reward[0])}원) - ${totalRanks[0]}개`,
    );
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },

  formatReward(reward) {
    const rewardString = String(reward);

    return rewardString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
};
export default OutputView;
