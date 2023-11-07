import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import RandomNumberGenerator from '../../model/RandomNumberGenerator.js';
import GameMessageGenerator from '../../model/GameMessageGenerator.js';
import GameCalculator from '../../model/GameCalculator.js';
import { NUMBER } from '../../utils/constants.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.randomNumberGenerator = new RandomNumberGenerator();
    this.gameMessageGenerator = new GameMessageGenerator();
    this.gameCalculator = null;
    this.purchaseLottos = null;
    this.purchaseMoney = null;
  }

  async start() {
    await this.getLottoTryCount();

    await this.getNumbersForWinner();
  }

  async getLottoTryCount() {
    this.purchaseMoney = await this.inputView.getUserInputPurchaseMoney();
    const LOTTO_TRY_COUNT = this.purchaseMoney / NUMBER.purchaseMoneyDivisor;

    this.printPurchaseLottos(LOTTO_TRY_COUNT);
  }

  printPurchaseLottos(lottoTryCount) {
    this.purchaseLottos = this.randomNumberGenerator.getRandomNumberArray(lottoTryCount);
    const PURCHASE_LOTTOS_MESSAGES = this.gameMessageGenerator.getPurchaseLottosMessages(
      this.purchaseLottos
    );

    this.outputView.showPurchaseLottosOutput(lottoTryCount, PURCHASE_LOTTOS_MESSAGES);
  }

  async getNumbersForWinner() {
    const WINNING_NUMBERS = await this.inputView.getUserInputWinningNumbers();
    const BONUS_NUMBER = await this.inputView.getUserInputBonusNumber(WINNING_NUMBERS);

    this.printGameResult(WINNING_NUMBERS, BONUS_NUMBER);
  }

  printGameResult(winningNumbers, bonusNumber) {
    this.gameCalculator = new GameCalculator(this.purchaseLottos, winningNumbers, bonusNumber);
    const WINNING_RESULT = this.gameCalculator.calculate();
    const WINNING_RESULT_MESSAGE = this.gameMessageGenerator.getResultMessage(
      WINNING_RESULT,
      this.purchaseMoney
    );

    this.outputView.showGameResultOutput(WINNING_RESULT_MESSAGE);
  }
}

export default GameController;
