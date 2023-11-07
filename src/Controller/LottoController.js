import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Model/Lotto.js';

class LottoController {
  constructor() {
    this.AMOUNT = 0;
    this.lottoList = [];
    this.lottoNumbers = [];
    this.bonusNumber = 0;
  }

  // 게임 시작
  async startGame() {
    const purchaseAmount = await InputView.inputPurchaseAmount();
    this.AMOUNT = purchaseAmount;

    this.createLottoList();

    const lottoNumber = await InputView.inputLottoNumbers();
    this.lottoNumbers = lottoNumber;

    const inputBonusNumber = await InputView.inputBonusNumber();
    this.bonusNumber = inputBonusNumber;
  }

  // 로또 번호 생성
  generateLottoNumbers() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumber.sort((a, b) => a - b);
    const lotto = new Lotto(randomNumber);
    return lotto.getNumber();
  }

  createLottoList() {
    for (let i = 0; i < this.AMOUNT; i++) {
      this.lottoList.push(this.generateLottoNumbers());
    }
    OutputView.printLottoNumbers(this.AMOUNT, this.lottoList);
  }

  calculatePrizes(lottoNumbers, bonusNumber) {
    const results = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };

    for (const lotto of this.lottoList) {
      const prize = lotto.calculatePrizes(lottoNumbers, bonusNumber);
      results[prize]++;
    }
    return results;
  }
}

export default LottoController;
