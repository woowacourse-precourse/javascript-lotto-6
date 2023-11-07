import { Console } from '@woowacourse/mission-utils';
import messages from './constants/messages';
import prize from './constants/prize';

class OutputHandler {
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

  static printResult(rank, count, isGuessBonus) {
    isGuessBonus
      ? Console.print(
          `${count}개 일치, 보너스 볼 일치 (${prize[rank]}원) - ${count}개`,
        )
      : Console.print(`${count}개 일치 (${prize[rank]}원) - ${count}개`);
  }

  static printReturnRate(returnRate) {
    Console.print(`총 수익률은 ${returnRate}%입니다.`);
  }
}

export default OutputHandler;
