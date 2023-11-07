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
    this.lotto;
  }

  // 게임 시작
  async startGame() {
    const purchaseAmount = await InputView.inputPurchaseAmount();
    this.AMOUNT = purchaseAmount;

    this.createLottoNumberList();

    const lottoNumber = await InputView.inputLottoNumbers();
    this.lottoNumbers = lottoNumber;

    this.lotto = this.createLotto();

    const inputBonusNumber = await InputView.inputBonusNumber();
    this.bonusNumber = inputBonusNumber;

    const prizes = this.calculatePrizes();
    OutputView.printPrize(prizes);
  }

  // 로또 번호 생성
  generateLottoNumbers() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumber.sort((a, b) => a - b);
    return randomNumber;
  }

  createLottoNumberList() {
    for (let i = 0; i < this.AMOUNT; i++) {
      this.lottoList.push(this.generateLottoNumbers());
    }
    OutputView.printLottoNumbers(this.AMOUNT, this.lottoList);
  }

  createLotto() {
    const lotto = new Lotto(this.lottoNumbers);
    return lotto;
  }

  calculatePrizes() {
    const results = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };

    for (const lottoNumbers of this.lottoList) {
      const prize = this.lotto.calculatePrize(lottoNumbers, this.bonusNumber);
      console.log(prize);
      results[prize]++;
    }
    return results;
  }
}

export default LottoController;
