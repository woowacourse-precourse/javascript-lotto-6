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
  }

  async playLotto() {
    this.usedMoney = await InputView.inputMoney(); // 정상 입력 시에 통과
    this.countsOfLottos = this.howManyLottos();
    this.makeNewLottos();
    OutputView.printLottos(this.countsOfLottos, this.lottoArray);
    this.winningNumbers = await InputView.inputNumbers();
    this.bonusNumber = await InputView.inputBonusNumber();
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

  makeStatistics() {
    this.lottoArray.forEach((lotto) =>
      lotto.compareNumbers(this.winningNumbers, this.bonusNumber)
    );
    this.calculateProfit();
  }

  calculateProfit() {
    // 돈 계산하고, 수익률 Place객체에 저장
    const profitPercentage = (calculateReward() / this.usedMoney) * 100;
    const rounded = Number(profitPercentage.toFixed(2));
    Place.profit = rounded;
  }
}

export default LottoController;
