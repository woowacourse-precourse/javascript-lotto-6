import { MissionUtils } from '@woowacourse/mission-utils';
import Validation from '../validation/Validation.js';
class InputUi {
  constructor() {}
  async askpurchaseAmount() {
    try {
        const PURCHASE_AMOUNT = await MissionUtils.Console.readLineAsync(
        '구입 금액을 입력하세요.\n'
        );
        Validation.validatepurchaseInput(PURCHASE_AMOUNT);
        return PURCHASE_AMOUNT;

    } catch (error){
        MissionUtils.Console.print(error.message);
    }
    await this.askpurchaseAmount();
  }
  async askWinningNumber() {
    const WINNING_NUMBER = await MissionUtils.Console.readLineAsync(
      '당첨 번호를 입력하세요.\n'
    );
    return WINNING_NUMBER;
  }
  async askBonusNumber() {
    const BONUS_NUMBER = await MissionUtils.Console.readLineAsync('보너스 번호를 입력하세요.');
    return BONUS_NUMBER;
  }
}
export default InputUi;
