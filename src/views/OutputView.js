import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/OutputMessage.js';

class OutputView {
  static outputLottoPurchaseAmount(lottoList) {
    Console.print(`\n${lottoList.length}${OUTPUT_MESSAGE.boughtNumber}`);
    lottoList.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });
  }

  static outputLottoGameResult(result) {
    Console.print(`\n${OUTPUT_MESSAGE.winningResultHeader}`);
    Console.print(`${OUTPUT_MESSAGE.winningResult.fifthPrize} - ${result.fifthPrize}개`);
    Console.print(`${OUTPUT_MESSAGE.winningResult.fourthPrize} - ${result.fourthPrize}개`);
    Console.print(`${OUTPUT_MESSAGE.winningResult.thirdPrize} - ${result.thirdPrize}개`);
    Console.print(`${OUTPUT_MESSAGE.winningResult.secondPrize} - ${result.secondPrize}개`);
    Console.print(`${OUTPUT_MESSAGE.winningResult.firstPrize} - ${result.firstPrize}개`);
    if (result.profitRate === '')
      Console.print(`${OUTPUT_MESSAGE.profitRatioHeader}0.0%${OUTPUT_MESSAGE.profitRatioFooter}`);
    if (result.profitRate !== '')
      Console.print(
        `${OUTPUT_MESSAGE.profitRatioHeader}${result.profitRate}${OUTPUT_MESSAGE.profitRatioFooter}`,
      );
  }

  static outputMessage(message) {
    Console.print(`\n${message}\n`);
  }
}

export default OutputView;
