import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, OTHERS } from '../../utils/constants.js';

class OutputView {
  showPurchaseLottosOutput(lottoTryCount, purchaseLottosMessages) {
    Console.print(`${OTHERS.lineBreak}${lottoTryCount}${OUTPUT_MESSAGE.lottoTryCount}`);
    purchaseLottosMessages.forEach((lottoMessage) => Console.print(`[${lottoMessage}]`));
  }

  showGameResultOutput(winningResultMessage) {
    Console.print(OUTPUT_MESSAGE.result);
    winningResultMessage[0].forEach((result) => Console.print(result));
    Console.print(
      `${OUTPUT_MESSAGE.returnRate1} ${winningResultMessage[1]}${OTHERS.percent}${OUTPUT_MESSAGE.returnRate2}`
    );
  }
}

export default OutputView;
