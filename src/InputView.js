import { Console } from '@woowacourse/mission-utils';
import { INFO } from './constants/Setting.js';

const InputView = {
  async readLottoPurchaseAmount() {
    const inputValue = await Console.readLineAsync(INFO.inputPurchaseAmount);
    return inputValue;
  },

  async readLottoWinningNumbers() {
    const inputValue = await Console.readLineAsync(INFO.inputWinningNumbers);
    return inputValue;
  },

  async readLottoBonusNumber() {
    const inputValue = await Console.readLineAsync(INFO.inputBonusNumber);
    return inputValue;
  },
};

export default InputView;
