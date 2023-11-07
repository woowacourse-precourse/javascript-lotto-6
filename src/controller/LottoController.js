import { NOTICE_MESSAGES, ERROR_MESSAGES } from '../constants/messages.js';
import LottoModel from '../model/LottoModel.js';
import OutputView from '../views/OutputView.js';
import UserInput from '../views/UserInput.js';

class LottoController {
  constructor() {
    this.lottoModel = new LottoModel();
    this.outputView = new OutputView();
    this.inputView = new UserInput();
  }

  async lottoDraw() {
    await this.inputAmount();
    this.lottoModel.generateRandomLottoNumbers();
    this.outputView.printLottos(this.lottoModel.randomNumbers);
  }

  async inputAmount() {
    const getPrice = await this.inputView.userInput(NOTICE_MESSAGES.inputMoney);
    try {
      this.lottoModel.setPurchaseAmount(getPrice);
      this.outputView.print(`${this.lottoModel.purchasecount}개를 구매했습니다.`);
    } catch (e) {
      this.outputView.print(`${ERROR_MESSAGES.error} ${e.message}`);
      this.inputAmount();
    }
  }
}

export default LottoController;
