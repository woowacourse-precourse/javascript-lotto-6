import { MissionUtils } from '@woowacourse/mission-utils';
import Validation from '../validation/Validation.js';
import GameUtils from '../lotto/GameUtils.js';
class InputUi {
  constructor() {}
  async askpurchaseAmount() {
    try {
    const PURCHASE_AMOUNT = await MissionUtils.Console.readLineAsync(
      '구입 금액을 입력하세요.\n'
    );
    Validation.validatepurchaseInput(PURCHASE_AMOUNT);
    return PURCHASE_AMOUNT;
    } catch(error) {
      MissionUtils.Console.print(error.message);
    }
    return await this.askpurchaseAmount();
  }
  async askWinningNumber() {
    try {
    const WINNING_NUMBER_INPUT = await MissionUtils.Console.readLineAsync(
      '당첨 번호를 입력하세요.\n'
    );
    const WINNING_NUMBER = GameUtils.splitComma(WINNING_NUMBER_INPUT);
    // Validation.validateLottoNumbers(WINNING_NUMBER);
    return WINNING_NUMBER;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
    return await this.askWinningNumber();
  }
  async askBonusNumber() {
    try {
    const BONUS_NUMBER = await MissionUtils.Console.readLineAsync(
      '보너스 번호를 입력하세요.'
    );
    // Validation.validateBonusNumberInput(BONUS_NUMBER);
    return BONUS_NUMBER;
    } catch(error) {
      MissionUtils.Console.print(error.message);
    }
    return await this.askBonusNumber();
  }
}
export default InputUi;
