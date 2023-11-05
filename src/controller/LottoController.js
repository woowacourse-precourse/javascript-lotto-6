import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../model/Lotto.js';

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.lotto = new Lotto();
    this.usedMoney = 0;
    this.countOfLottos = 0;
  }

  async playLotto() {
    this.usedMoney = await this.inputView.inputMoney(); // 정상 입력 시에 통과
    this.countOfLottos = this.howManyLottos();
    console.log(this.countOfLottos);
  }

  howManyLottos() {
    return this.usedMoney / 1000;
  }

  calculateBenefit(earnedMoney) {
    // this.usedMoney
  }
}

export default LottoController;
