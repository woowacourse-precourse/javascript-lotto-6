 import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZE, REWARD_INFOS } from './constants.js';

export default class LottoMachine {
  #lottos;
  #wonStats = [
    { rank: 5, count: 0 },
    { rank: 4, count: 0 },
    { rank: 3, count: 0 },
    { rank: 2, count: 0 },
    { rank: 1, count: 0 },
  ];

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    lottos.forEach((lotto) => {
      const reward = lotto.findReward(winningNumbers, bonusNumber);
      if (reward)
        this.#wonStats.find((wonStat) => wonStat.rank === reward.RANK).count++;
    });
  }

  printWonStats() {
    this.#wonStats.forEach((wonStat) => {
      const info = REWARD_INFOS.find(
        (rewardInfo) => rewardInfo.RANK === wonStat.rank
      );
      Console.print(
        `${info.MATCH_COUNT}개 일치${
          info.BONUS ? ', 보너스 볼 일치' : ''
        } (${Intl.NumberFormat().format(info.REWARD)}원) - ${wonStat.count}개`
      );
    });
  }

  calculatReturnRate() {
    let lottoReturn = 0;
    this.#wonStats.forEach((wonStat) => {
      const info = REWARD_INFOS.find(
        (rewardInfo) => rewardInfo.RANK === wonStat.rank
      );
      lottoReturn += wonStat.count * info.REWARD;
    });

    return ((lottoReturn / (this.#lottos.length * LOTTO_PRIZE)) * 100).toFixed(
      1
    );
  }
}
