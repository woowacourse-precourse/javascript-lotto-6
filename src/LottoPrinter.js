import { Console } from '@woowacourse/mission-utils';
import messages from './constants/messages';
import prize from './constants/prize';

class LottoPrinter {
  static requestPurchaseAmount() {
    Console.print(messages.purchase.request);
  }

  static printPurchaseComplete(number) {
    Console.print(`${number}${messages.purchase.complete}`);
  }

  static printTicketNumbers(ticketNumbers) {
    Console.print(ticketNumbers);
  }

  static requestWinningNumbers() {
    Console.print(messages.number.winning);
  }

  static requestBonusNumber() {
    Console.print(messages.number.bonus);
  }

  static printStaticsHeadLine() {
    Console.print(messages.statics.headline);
  }

  static printStaticsSeperator() {
    Console.print(messages.statics.seperator);
  }

  static printResult(matchCount, ticketCount) {
    isGuessBonus
      ? Console.print(
          `${matchCount}개 일치, 보너스 볼 일치 (${prize[matchCount]}원) - ${ticketCount}개`,
        )
      : Console.print(
          `${matchCount}개 일치 (${prize[matchCount]}원) - ${ticketCount}개`,
        );
  }

  static printReturnRate(returnRate) {
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default LottoPrinter;
