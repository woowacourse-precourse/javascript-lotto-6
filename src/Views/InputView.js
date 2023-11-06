import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages.js';
import CONSTANTS from '../../utils/Constants.js';

const InputView = {
  async readPurchaseAmount() {
    return Number(await Console.readLineAsync(MESSAGES.purchaseAmountQuery));
  },
  async readMainNumber() {
    const lottoNumberString = await Console.readLineAsync(MESSAGES.mainNumberQuery);
    return lottoNumberString.split(CONSTANTS.numberDelimiter).map(Number);
  },
};

export default InputView;
