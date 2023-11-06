import InputView from '../View/InputView.js';
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

    const lottoNumber = await InputView.inputLottoNumbers();
    this.lottoNumbers = lottoNumber;

    const inputBonusNumber = await InputView.inputBonusNumber();
    this.bonusNumber = inputBonusNumber;

    this.createLottoList();
  }

  createLottoList() {
    for (let i = 0; i < this.AMOUNT; i++) {
      const lotto = new Lotto();
      this.lottoList.push(lotto);
    }
  }
}

export default LottoController;
