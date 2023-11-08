import { NOTICE_MESSAGES } from '../constants/messages.js';
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
    await this.inputluckyNumbers();
    await this.inputBonusNumber();
    this.lottoModel.calculateTotalMatchCount();
    this.lottoModel.checkBonusNumber();
    this.lottoModel.calculateResult();
    this.lottoModel.initializeResultObject();

    this.outputView.print(this.lottoModel.matchCount);
    this.outputView.print(this.lottoModel.hasBonus);
    this.outputView.print(this.lottoModel.result);
    this.outputView.print(this.lottoModel.initObject);
  }

  async inputAmount() {
    const getPrice = await this.inputView.userInput(NOTICE_MESSAGES.inputMoney);
    try {
      this.lottoModel.setPurchaseAmount(getPrice);
      this.outputView.print(`${this.lottoModel.purchasecount}개를 구매했습니다.`);
    } catch (e) {
      this.outputView.print(e.message);
      await this.inputAmount();
    }
  }

  async inputluckyNumbers() {
    const getLuckyNumbers = await this.inputView.userInput(NOTICE_MESSAGES.inputLuckyNumbers);
    try {
      this.lottoModel.setLuckyNumbers(getLuckyNumbers);
    } catch (e) {
      this.outputView.print(e.message);
      await this.inputluckyNumbers();
    }
  }

  async inputBonusNumber() {
    const getBonusNumber = await this.inputView.userInput(NOTICE_MESSAGES.inputBonusNumber);
    try {
      this.lottoModel.setBonusNumber(getBonusNumber);
    } catch (e) {
      this.outputView.print(e.message);
      await this.inputBonusNumber();
    }
  }
}

export default LottoController;
