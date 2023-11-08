import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constant/Constants';
const InputView = {
  readLottoAmount() {
    return Console.readLineAsync(MESSAGE.INPUT_AMOUNT);
  },
  readWinningNumber() {
    return Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBER);
  },
  readBonusNumber() {
    return Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
  },
};

export default InputView;