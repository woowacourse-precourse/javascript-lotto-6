import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './constants/message.js';

class User {
  async getLottoPurchasePrice() {
    const lottoPurchasePrice = await Console.readLineAsync(
      INPUT_MESSAGE.lottoPurchasePrice,
    );
    return lottoPurchasePrice;
  }

  async getLottoWinningNumbers() {
    const lottoWinningNumbers = await Console.readLineAsync(
      INPUT_MESSAGE.lottoWnningNumbers,
    );
    return lottoWinningNumbers;
  }

  async getLottoBonusNumber() {
    const lottoBonusNumber = await Console.readLineAsync(
      INPUT_MESSAGE.lottoBonusNumber,
    );
    return lottoBonusNumber;
  }
}

export default User;
