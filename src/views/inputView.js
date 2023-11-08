import { INPUT_MESSAGE } from '../constants/message';
import view from '../utils/view';

const inputView = {
  async inputPurchaseAmount() {
    const input = await view.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
    return input;
  },

  async inputWinningNumbers() {
    const input = await view.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
    return input;
  }
};

export default inputView;
