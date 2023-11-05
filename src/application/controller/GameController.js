import InputView from '../view/InputView.js';
import RandomNumberGenerator from '../../RandomNumberGenerator.js';
import { NUMBER } from '../../utils/constants.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.randomNumberGenerator = new RandomNumberGenerator();
  }

  async start() {
    // 스타일 수정필요
    const lottoTicketNumber =
      (await this.inputView.getUserInputPurchaseMoney()) / NUMBER.purchaseMoneyDivisor;
    this.randomNumberGenerator.getRandomNumberArray(lottoTicketNumber);
  }
}

export default GameController;
