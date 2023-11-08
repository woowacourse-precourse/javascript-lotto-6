import { MissionUtils } from '@woowacourse/mission-utils';
import InputMessage from '../constants/InputMessage';

class InputView {
  static async inputParchaseCost() {
    return MissionUtils.Console.readLineAsync(InputMessage.PURCHASE_COST);
  }

  static async inputWinningNumbers() {
    return MissionUtils.Console.readLineAsync(InputMessage.WINNING_NUMBERS);
  }

  static async inputBonusNumber() {
    return MissionUtils.Console.readLineAsync(InputMessage.BONUS_NUMBER);
  }
}

export default InputView;
