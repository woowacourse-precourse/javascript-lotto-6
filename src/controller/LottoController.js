import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../model/Lotto.js';

const { Random } = MissionUtils;
class LottoController {
  constructor() {
    this.usedMoney = 0;
    this.countOfLottos = 0;
    this.lottoArray = [];
  }

  async playLotto() {
    this.usedMoney = await InputView.inputMoney(); // 정상 입력 시에 통과
    this.countOfLottos = this.howManyLottos();
    this.makeNewLottos();
    OutputView.printLottos(this.countOfLottos, this.lottoArray);
  }

  howManyLottos() {
    return this.usedMoney / 1000;
  }

  // 로또 구매 개수만큼 객체 생성
  makeNewLottos() {
    for (let i = 0; i < this.countOfLottos; i += 1) {
      const lottoNumbers = this.pickRandomNumbers();
      const sortedlottoNumbers = lottoNumbers.sort((a, b) => a - b);
      const lotto = new Lotto([...sortedlottoNumbers]);
      this.lottoArray.push(lotto);
    }
  }

  pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  calculateBenefit(earnedMoney) {
    // this.usedMoney
  }
}

export default LottoController;
