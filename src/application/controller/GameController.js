import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import RandomNumberGenerator from '../../RandomNumberGenerator.js';
import GameMessageGenerator from '../../GameMessageGenerator.js';
import GameCalculator from '../../GameCalculator.js';
import { NUMBER } from '../../utils/constants.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.randomNumberGenerator = new RandomNumberGenerator();
    this.gameMessageGenerator = new GameMessageGenerator();
    this.gameCalculator = null;
  }

  async start() {
    const PURCHASE_MONEY = await this.inputView.getUserInputPurchaseMoney();

    const LOTTO_TRY_COUNT = this.getLottoTryCount(PURCHASE_LOTTOS);

    const PURCHASE_LOTTOS = this.randomNumberGenerator.getRandomNumberArray(LOTTO_TRY_COUNT);
    const PURCHASE_LOTTOS_MESSAGES = this.gameMessageGenerator.getPurchaseLottosMessages(PURCHASE_LOTTOS);

    this.outputView.showPurchaseLottosOutput(LOTTO_TRY_COUNT, PURCHASE_LOTTOS_MESSAGES);
    
    const WINNING_NUMBERS = await this.inputView.getUserInputWinningNumbers();
    const BONUS_NUMBER = await this.inputView.getUserInputBonusNumber(WINNING_NUMBERS);

    this.gameCalculator = new GameCalculator(PURCHASE_LOTTOS, WINNING_NUMBERS, BONUS_NUMBER);
    const WINNING_RESULT = this.gameCalculator.calculate();
    const WINNING_RESULT_MESSAGE = this.gameMessageGenerator.getResultMessage(
      WINNING_RESULT,
      PURCHASE_MONEY
    );
    
    this.outputView.showGameResultOutput(WINNING_RESULT_MESSAGE);
  }

  getLottoTryCount(purchaseMoney) {
    const LOTTO_TRY_COUNT = purchaseMoney / NUMBER.purchaseMoneyDivisor;
    
    return LOTTO_TRY_COUNT;
  }
}

export default GameController;
