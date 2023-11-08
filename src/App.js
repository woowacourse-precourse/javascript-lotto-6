import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { REWARD_INFOS } from './constants.js';
import ReadInput from './ReadInput.js';
import LottoMachine from './LottoMachine.js';

class App {
  generatRandomLottos(purchaseAmount) {
    const lottoAmount = purchaseAmount / 1000;
    Console.print(`${lottoAmount}개를 구매했습니다.`);

    const lottos = [];
    for (let i = 0; i < lottoAmount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
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

  printWinnigStatistics(lottos, winningNumbers, bonusNumber) {
    const lottoMachine = new LottoMachine(lottos, winningNumbers, bonusNumber);

    Console.print('당첨 통계\n---');
    lottoMachine.printWonStats();

    const returnRate = lottoMachine.calculatReturnRate();
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }

  async play() {
    const purchaseAmount = await ReadInput.readPurchaseAmount();
    const lottos = this.generatRandomLottos(purchaseAmount);
    const winningNumbers = await ReadInput.readWinningNumbers();
    const bonusNumber = await ReadInput.readBonusNumber(winningNumbers);

    this.printWinnigStatistics(lottos, winningNumbers, bonusNumber);
  }
}

export default App;
