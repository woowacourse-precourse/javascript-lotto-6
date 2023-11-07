import { MissionUtils } from '@woowacourse/mission-utils';
import Validation from '../validation/Validation.js';
import UiUtils from './UiUtils.js';
import { INPUT_MESSAGE } from '../Constants.js';
class InputUi {
  constructor() {}
  async askpurchaseAmount() {
    try {
    const PURCHASE_AMOUNT = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);
    Validation.validatepurchaseInput(PURCHASE_AMOUNT);
    return PURCHASE_AMOUNT;
    } catch(error) {
      MissionUtils.Console.print(error.message);
    }
    return await this.askpurchaseAmount();
  }
  async askWinningNumber() {
    try {
    const WINNING_NUMBER_INPUT = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.winningNumbers);
    const WINNING_NUMBER = UiUtils.splitComma(WINNING_NUMBER_INPUT);
    Validation.validateLottoNumbers(WINNING_NUMBER);
    return WINNING_NUMBER;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
    return await this.askWinningNumber();
  }
  async askBonusNumber() {
    try {
    const BONUS_NUMBER = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
    Validation.validateBonusNumber(BONUS_NUMBER);
    return BONUS_NUMBER;
    } catch(error) {
      MissionUtils.Console.print(error.message);
    }
    return await this.askBonusNumber();
  }
}
export default InputUi;
