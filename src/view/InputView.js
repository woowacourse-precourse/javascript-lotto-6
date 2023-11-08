import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';

const InputView = {
  async getLottoPrice() {
    const lottoPrice = InputView.readLine(INPUT_MESSAGE.LOTTO_PRICE);
    return lottoPrice;
  },

  async getWinnigNumbers() {
    const winnigNumbers = InputView.readLine(INPUT_MESSAGE.WINNING_NUMBERS);
    return winnigNumbers;
  },

  async getBonusNumber() {
    const bonusNumber = InputView.readLine(INPUT_MESSAGE.BONUS_NUMBER);
    return bonusNumber;
  },

  async readLine(message) {
    try {
      const input = await Console.readLineAsync(message);
      return input;
    } catch (error) {
      Console.print(error);
      throw error;
    }
  },
};

export default InputView;
