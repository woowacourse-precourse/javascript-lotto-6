import { MissionUtils } from '@woowacourse/mission-utils';
import { INFO_MESSAGES, WINNING_MESSAGES } from '../constant.js';

export default class OutputView {
  printMessage(message) {
    MissionUtils.Console.print(`${message}`);
  }

  printPurchasedQuantity(quantity) {
    MissionUtils.Console.print(`\n${quantity}${INFO_MESSAGES.PURCHASED}`);
  }

  printWinning(winningCount, Win5andBonus) {
    MissionUtils.Console.print(
      `${WINNING_MESSAGES.MATCHING_3}${winningCount[3]}${WINNING_MESSAGES.COUNT}\n${WINNING_MESSAGES.MATCHING_4}${winningCount[4]}${WINNING_MESSAGES.COUNT}\n${WINNING_MESSAGES.MATCHING_5}${winningCount[5]}${WINNING_MESSAGES.COUNT}\n${WINNING_MESSAGES.MATCHING_5_BONUS}${Win5andBonus}${WINNING_MESSAGES.COUNT}\n${WINNING_MESSAGES.MATCHING_6}${winningCount[6]}${WINNING_MESSAGES.COUNT}`
    );
  }

  printProfitRate(rate) {
    MissionUtils.Console.print(
      `${WINNING_MESSAGES.PROFIT_RATE_FRONT}${rate}${WINNING_MESSAGES.PROFIT_RATE_BACK}`
    );
  }
}
