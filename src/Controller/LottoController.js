import InputView from "../View/InputView.js";
import LottoMachine from "../Model/LottoMachine.js";
import { Console } from '@woowacourse/mission-utils';

class LottoController {
  constructor() {
    this.inputView = new InputView();
    this.lottoMachine = new LottoMachine();
  }

  async handlePurchase() {
    const purchaseAmount = await this.inputView.promptPurchaseAmount();
    const numberOfLottos = this.lottoMachine.calculateLottoCount(purchaseAmount);
    
    return numberOfLottos;
  }

  async handleLottoWinningNumbers() {
    const winningNumbers = await this.inputView.promptWinningNumbers();
    
    return winningNumbers;
  }
}

export default LottoController;