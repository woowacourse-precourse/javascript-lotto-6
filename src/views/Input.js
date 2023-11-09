import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message';

const Input = {
  async readPrice() {
    const price = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_PRICE);
    return price;
  },

  async readWinningNumbers() {
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      MESSAGE.INPUT_WINNING_NUMBERS,
    );
    return winningNumbers;
  },
  
  async readBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      MESSAGE.INPUT_BONUS_NUMBER,
    );
    return bonusNumber;
  },
};
export default Input;
