import OutputMessage from '../constants/OutputMessage';
import { printMessage } from '../utils/messages';

class OutputView {
  static printLottos(lottos) {
    printMessage(OutputMessage.PURCHASED_LOTTO_COUNT(lottos.length));
    lottos.forEach(lotto => {
      printMessage(`[${lotto.join(', ')}]`);
    });
  }

  static printFinalResult(results, profit) {
    this.printResults(results);
    this.printProfit(profit);
  }

  static printResults(results) {
    const order = [3, 4, 5, '5+1', 6];
    printMessage(OutputMessage.RESULT_HEADER);

    order.map(key => {
      const { count } = results[key];
      const { prize } = results[key];
      printMessage(OutputMessage.RESULT(key, prize, count));
    });
  }

  static printProfit(profit) {
    printMessage(OutputMessage.PROFIT(profit));
  }
}

export default OutputView;
