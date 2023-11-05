import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../model/Lotto.js';

const { Random } = MissionUtils;
class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.usedMoney = 0;
    this.countOfLottos = 0;
    this.lottoArray = [];
  }

  async playLotto() {
    this.usedMoney = await this.inputView.inputMoney(); // 정상 입력 시에 통과
    this.countOfLottos = this.howManyLottos();
    this.lottoArray = this.makeNewLottos(); // 개수만큼 로또생성
  }

  howManyLottos() {
    return this.usedMoney / 1000;
  }

  // 로또 구매 개수만큼 객체 생성
  makeNewLottos() {
    for (let i = 0; i < this.countOfLottos; i += 1) {
      const lotto = new Lotto(this.pickRandomNumbers());
      this.lottoArray.push(lotto);
    }
  }

  pickRandomNumbers() {
    Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  calculateBenefit(earnedMoney) {
    // this.usedMoney
  }
}

export default LottoController;
