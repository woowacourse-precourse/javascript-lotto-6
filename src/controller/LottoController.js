import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../model/Lotto.js';
import { Place, calculateReward } from '../utils/Statistics.js';

const { Random } = MissionUtils;
class LottoController {
  constructor() {
    this.usedMoney = 0;
    this.countsOfLottos = 0;
    this.lottoArray = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.inputView = new InputView();
  }

  async playLotto() {
    this.usedMoney = await this.inputView.inputMoney();
    this.countsOfLottos = this.howManyLottos();
    this.makeNewLottos();
    OutputView.printLottos(this.countsOfLottos, this.lottoArray);
    this.winningNumbers = await this.inputView.repeatInputNumbers();
    this.bonusNumber = await this.inputView.repeatInputBonusNumber();
    this.makeStatistics();
    OutputView.printResult();
  }

  howManyLottos() {
    return this.usedMoney / 1000;
  }

  // 로또 구매 개수만큼 객체 생성
  makeNewLottos() {
    for (let i = 0; i < this.countsOfLottos; i += 1) {
      const lottoNumbers = this.pickRandomNumbers();
      const sortedlottoNumbers = lottoNumbers.sort((a, b) => a - b);
      const lotto = new Lotto([...sortedlottoNumbers]);
      this.lottoArray.push(lotto);
    }
  }

  pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  // 당첨 & 수익률 계산
  makeStatistics() {
    this.lottoArray.forEach((lotto) =>
      lotto.compareNumbers(this.winningNumbers, this.bonusNumber)
    );
    this.calculateProfit();
  }

  calculateProfit() {
    const profitPercentage = (calculateReward() / this.usedMoney) * 100;
    const rounded = Number(profitPercentage.toFixed(2));
    Place.profit = rounded;
  }
}

export default LottoController;
