import { printMessage } from '../utils/index.js';
import {
  LOTTO_STATISTICS_MESSAGE,
  MESSAGE,
  REGEX,
} from '../utils/constants.js';

class OutputView {
  printUserLottos(userLottos) {
    printMessage(`\n${userLottos.length}개를 구매했습니다.`);

    const messages = userLottos.map(
      (lotto) => `[${lotto.join(REGEX.comma_space)}]`,
    );

    printMessage(messages.join('\n'));
  }

  printStatistics(statistics) {
    printMessage(MESSAGE.statistics);

    const messages = statistics.map(
      (count, idx) => `${LOTTO_STATISTICS_MESSAGE[idx]}${count}개`,
    );

    printMessage(messages.join('\n'));
  }

  printRateOfReturn(rateOfReturn) {
    printMessage(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default OutputView;
