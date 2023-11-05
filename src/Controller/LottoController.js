import InputView from "../View/InputView.js";
import LottoMachine from "../Model/LottoMachine.js";
import Lotto from "../Lotto.js";
import { Console } from '@woowacourse/mission-utils';

class LottoController {
  constructor() {
    this.lotto = new Lotto();
    this.inputView = new InputView();
    this.lottoMachine = new LottoMachine();
  }

  async handlePurchase() {
    const purchaseAmount = await this.inputView.promptPurchaseAmount();
    const numberOfLottos = this.lottoMachine.calculateLottoCount(purchaseAmount);
    
    this.lotto.generateLottoNumbers(numberOfLottos);
    const lottoNumbersArray = this.lotto.printLottoNumbersArray();
    Console.print(lottoNumbersArray);
  }
}

export default LottoController;