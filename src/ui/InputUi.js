import { MissionUtils } from '@woowacourse/mission-utils';

class InputUi {
  constructor() {}
  async askpurchaseAmount() {
    const PURCHASE_AMOUNT = await MissionUtils.Console.readLineAsync(
      '구입 금액을 입력하세요.'
    );
    return PURCHASE_AMOUNT;
  }
  async askWinningNumber() {
    const WINNING_NUMBER = await MissionUtils.Console.readLineAsync(
      '당첨 번호를 입력하세요.'
    );
    return WINNING_NUMBER;
  }
  async askBonusNumber() {
    const BONUS_NUMBER = await MissionUtils.Console.readLineAsync('보너스 번호를 입력하세요.');
    return BONUS_NUMBER;
  }
}
export default InputUi;
