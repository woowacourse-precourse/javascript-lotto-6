import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { REWARD_INFOS } from './constants.js';
import ReadInput from './ReadInput.js';

class App {
  generatRandomLottos(purchaseAmount) {
    const lottoAmount = purchaseAmount / 1000;
    Console.print(`${lottoAmount}개를 구매했습니다.`);

    const lottos = [];
    for (let i = 0; i < lottoAmount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 6, 6);
      const newLotto = new Lotto(lottoNumbers);
      newLotto.printNumbers();
      lottos.push(newLotto);
    }

    return lottos;
  }

  calculatReturnRate(wonStats, purchaseAmount) {
    let lottoReturn = 0;
    wonStats.forEach((wonStat) => {
      const info = REWARD_INFOS.find(
        (rewardInfo) => rewardInfo.RANK === wonStat.rank
      );
      lottoReturn += wonStat.count * info.REWARD;
    });

    return ((lottoReturn / purchaseAmount) * 100).toFixed(1);
  }

  printWinnigStatistics(lottos, purchaseAmount, winningNumbers, bonusNumber) {
    const wonStats = [
      { rank: 5, count: 0 },
      { rank: 4, count: 0 },
      { rank: 3, count: 0 },
      { rank: 2, count: 0 },
      { rank: 1, count: 0 },
    ];
    lottos.forEach((lotto) => {
      const reward = lotto.findReward(winningNumbers, bonusNumber);
      if (reward)
        wonStats.find((wonStat) => wonStat.rank === reward.RANK).count++;
    });

    Console.print('당첨 통계\n---');
    wonStats.forEach((wonStat) => {
      const info = REWARD_INFOS.find(
        (rewardInfo) => rewardInfo.RANK === wonStat.rank
      );
      Console.print(
        `${info.MATCH_COUNT}개 일치${
          info.BONUS ? ', 보너스 볼 일치' : ''
        } (${Intl.NumberFormat().format(info.REWARD)}원) - ${wonStat.count}개`
      );
    });

    const returnRate = this.calculatReturnRate(wonStats, purchaseAmount);
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }

  async play() {
    const purchaseAmount = await ReadInput.readPurchaseAmount();
    const lottos = this.generatRandomLottos(purchaseAmount);
    const winningNumbers = await ReadInput.readWinningNumbers();
    const bonusNumber = await ReadInput.readBonusNumber(winningNumbers);

    this.printWinnigStatistics(
      lottos,
      purchaseAmount,
      winningNumbers,
      bonusNumber
    );
  }
}

export default App;
