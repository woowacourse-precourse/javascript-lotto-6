import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import RandomNumberGenerator from '../../RandomNumberGenerator.js';
import GameMessageGenerator from '../../GameMessageGenerator.js';
import GameCalculator from '../../GameCalculator.js';
import { NUMBER } from '../../utils/constants.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.randomNumberGenerator = new RandomNumberGenerator();
    this.gameMessageGenerator = new GameMessageGenerator();
    this.outputView = new OutputView();
  }

  async start() {
    // 스타일 수정필요
    const LOTTO_TICKET_NUMBER =
      (await this.inputView.getUserInputPurchaseMoney()) / NUMBER.purchaseMoneyDivisor;
    const LOTTO_NUMBER_ARRAY = this.randomNumberGenerator.getRandomNumberArray(LOTTO_TICKET_NUMBER);
    const LOTTO_NUMBER_LIST_MESSAGE =
      this.gameMessageGenerator.getLottoNumberListMessage(LOTTO_NUMBER_ARRAY);
    this.outputView.showLottoNumberListOutput(LOTTO_TICKET_NUMBER, LOTTO_NUMBER_LIST_MESSAGE);
    const WINNING_NUMBERS = await this.inputView.getUserInputWinningNumbers();
    const BONUS_NUMBER = await this.inputView.getUserInputBonusNumber();
    const GAME_CALCULATOR = new GameCalculator(LOTTO_NUMBER_ARRAY, WINNING_NUMBERS, BONUS_NUMBER);
    const OBJ_FOR_RESULT = GAME_CALCULATOR.calculate();
    console.log(OBJ_FOR_RESULT);
    const GAME_RESULT_MASSAGE = this.gameMessageGenerator.getResultMessageForEachCorrect;
  }
}

export default GameController;
