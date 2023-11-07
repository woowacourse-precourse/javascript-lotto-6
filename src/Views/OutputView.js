import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from '../../utils/Constants.js';
import MESSAGES from '../../utils/Messages.js';

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
  printBlank() {
    Console.print(MESSAGES.blank);
  },

  printQuantity(purchaseAmount) {
    this.printBlank();
    Console.print(purchaseAmount / CONSTANTS.eachLottoPrice + MESSAGES.purchaseResult);
  },

  printLottoString(user) {
    user.getLottoStringArray().forEach((lottoString) => Console.print(lottoString));
    this.printBlank();
  },
  printStatistic(statistic) {
    Console.print(MESSAGES.raffleStatistic);
    MESSAGES.printRaffleStatistic(statistic).forEach((eachLine) => Console.print(eachLine));
  },
  printEarningRate(earningRate) {
    Console.print(MESSAGES.printEarningRate(earningRate));
  },
};

export default OutputView;
