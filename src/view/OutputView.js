import { printMessage } from '../common/utils.js';
import { UTILS, LOG, STATISTICS } from '../common/constants.js';

class OutputView {
  static printLottoCount(lottoCount) {
    printMessage(`${UTILS.line_break}${lottoCount}${LOG.lotto_count}`);
  };

  static printLottoNumbers(lottos) {
    const lottoNumbers = lottos.map((lotto) => `[${lotto.getNumbers().join(UTILS.comma_space)}]`);
    printMessage(lottoNumbers.join(UTILS.line_break));
  };

  static printStatistics(statistics) {
    printMessage(STATISTICS.winning_statistics + statistics + UTILS.line_break);
  };

  static printProfit(profit) {
    const formattedProfit = profit.toLocaleString();
    printMessage(STATISTICS.profit_prefix + formattedProfit + STATISTICS.profit_postfix);
  };  
};

export default OutputView;
