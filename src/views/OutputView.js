import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/OutputMessage.js';

class OutputView {
  static outputLottoPurchaseAmount(lottoList) {
    Console.print(`\n${lottoList.length}${OUTPUT_MESSAGE.boughtNumber}`);
    lottoList.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });
    Console.print('');
  }

  static outputLottoGameResult(result) {
    Console.print(OUTPUT_MESSAGE.winningResultHeader);
    Console.print(`${OUTPUT_MESSAGE.winningResult.fifthPrize}${result.fifthPrize}`);
    Console.print(`${OUTPUT_MESSAGE.winningResult.fourthPrize}${result.fourthPrize}`);
    Console.print(`${OUTPUT_MESSAGE.winningResult.thirdPrize}${result.thirdPrize}`);
    Console.print(`${OUTPUT_MESSAGE.winningResult.secondPrize}${result.secondPrize}`);
    Console.print(`${OUTPUT_MESSAGE.winningResult.firstPrize}${result.firstPrize}`);
    Console.print(
      `${OUTPUT_MESSAGE.profitRatioHeader}${result.profitRate}${OUTPUT_MESSAGE.profitRatioFooter}`,
    );
  }

  static outputMessage(message) {
    Console.print(`\n${message}\n`);
  }
}

export default OutputView;
