import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, OTHERS } from '../../utils/constants.js';

class OutputView {
  showPurchaseLottosOutput(lottoTryCount, purchaseLottosMessages) {
    Console.print(`${lottoTryCount}${OUTPUT_MESSAGE.lottoTryCount}`);
    purchaseLottosMessages.forEach((lottoMessage) => Console.print(`[${lottoMessage}]`));
  }

  showGameResultOutput(gameResultMessage) {
    Console.print(OUTPUT_MESSAGE.result);
    gameResultMessage[0].forEach((result) => Console.print(result));
    Console.print(
      `${OUTPUT_MESSAGE.returnRate1} ${gameResultMessage[1]}${OTHERS.percent}${OUTPUT_MESSAGE.returnRate2}`
    );
  }
}

export default OutputView;
