import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages.js';
import CONSTANTS from '../../utils/Constants.js';

const InputView = {
  async readPurchaseAmount() {
    return Number(await Console.readLineAsync(MESSAGES.purchaseAmountQuery));
  },
  async readMainNumber() {
    const lottoNumberString = await Console.readLineAsync(MESSAGES.winningNumberQuery);
    return lottoNumberString.split(CONSTANTS.numberDelimiter);
  },
};

export default InputView;
