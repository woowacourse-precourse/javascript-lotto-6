import { Console } from '@woowacourse/mission-utils';

import CONSTANTS from '../../constants/CONSTANTS.js';

const {
  PURCHASE_PRICE_INPUT_MESSAGE,
  WINNING_NUMBER_INPUT_MESSAGE,
  BONUS_NUMBER_INPUT_MESSAGE,
} = CONSTANTS;

class LottoInputView {
  async purchasePrice() {
    return await Console.readLineAsync(PURCHASE_PRICE_INPUT_MESSAGE);
  }

  async winningNumbers() {
    return await Console.readLineAsync(WINNING_NUMBER_INPUT_MESSAGE);
  }

  async bonusNumber() {
    return await Console.readLineAsync(BONUS_NUMBER_INPUT_MESSAGE);
  }
}

export default LottoInputView;
