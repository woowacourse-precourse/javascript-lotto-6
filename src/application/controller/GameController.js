import InputView from '../view/InputView.js';
import RandomNumberGenerator from '../../RandomNumberGenerator.js';
import GameMessageGenerator from '../../GameMessageGenerator.js';
import { NUMBER } from '../../utils/constants.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.randomNumberGenerator = new RandomNumberGenerator();
    this.gameMessageGenerator = new GameMessageGenerator();
  }

  async start() {
    // 스타일 수정필요
    const LOTTO_TICKET_NUMBER =
      (await this.inputView.getUserInputPurchaseMoney()) / NUMBER.purchaseMoneyDivisor;
    const LOTTO_NUMBER_ARRAY = this.randomNumberGenerator.getRandomNumberArray(LOTTO_TICKET_NUMBER);
    const LOTTO_NUMBER_LIST_MESSAGE =
      this.gameMessageGenerator.getLottoNumberListMessage(LOTTO_NUMBER_ARRAY);
  }
}

export default GameController;
