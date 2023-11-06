import { UTILS, LOG } from '../common/constants.js';
import { readLineAsync } from '../common/utils.js';

class InputView {
  static async getMoney() { 
    return readLineAsync(LOG.money_input);
  }

  static async getWinningNumbers() {
    return readLineAsync(UTILS.line_break + LOG.winning_input);
  }

  static async getBonusNumber() {
    return readLineAsync(UTILS.line_break + LOG.bonus_input);
  }
}

export default InputView;
