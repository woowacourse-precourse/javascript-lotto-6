import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from '../../utils/Constants.js';
import MESSAGES from '../../utils/Messages.js';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  printQuantity(purchaseAmount) {
    Console.print(MESSAGES.blank);
    Console.print(purchaseAmount / CONSTANTS.eachLottoPrice + MESSAGES.purchaseResult);
  },
  printLottoString(user) {
    user.getLottoStringArray().forEach((lottoString) => Console.print(lottoString));
    Console.print(MESSAGES.blank);
  },
};

export default OutputView;
