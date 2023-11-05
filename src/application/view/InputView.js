import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../../utils/constants';

class InputView {
  async getUserInputPurchaseMoney() {
    const USER_INPUT_PURCHASE_MONEY = await Console.readLineAsync(INPUT_MESSAGE.purchaseMoney);
  }

  async getUserInputWinningNumbers() {
    const USER_INPUT_WINNING_NUMBERS = await Console.readLineAsync(INPUT_MESSAGE.winningNumbers);
  }

  async getUserInputBonusNumber() {
    const USER_INPUT_BONUS_NUMBER = await Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
  }
}

export default InputView;
