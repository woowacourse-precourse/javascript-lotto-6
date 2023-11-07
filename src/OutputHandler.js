import { Console } from '@woowacourse/mission-utils';
import messages from './constants/messages';
import prize from './constants/prize';

class OutputHandler {
  requestPurchaseAmount() {
    Console.print(messages.purchase.request);
  }

  printPurchaseComplete(number) {
    Console.print(`${number}``${messages.purchase.complete}`);
  }

  requestWinningNumbers() {
    Console.print(messages.number.winning);
  }

  requestBonusNumber() {
    Console.print(messages.number.bonus);
  }

  printStaticsHeadLine() {
    Console.print(messages.statics.headline);
  }

  printStaticsSeperator() {
    Console.print(messages.statics.seperator);
  }

  printResult(rank, count, isGuessBonus) {
    isGuessBonus
      ? Console.print(
          `${count}개 일치, 보너스 볼 일치 (${prize[rank]}원) - ${count}개`,
        )
      : Console.print(`${count}개 일치 (${prize[rank]}원) - ${count}개`);
  }

  printReturnRate(returnRate) {
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default OutputHandler;
