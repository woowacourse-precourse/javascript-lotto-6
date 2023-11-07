import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./constants/messages.js";
import Utils from "./Utils.js";

class View {
  #printConsole(message) {
    return Console.print(message);
  }
  /* NONE ERROR */
  announcePurchasing(purchaseAmmount, lottos) {
    this.#printConsole(`${purchaseAmmount}${MESSAGES.COMMENT_PURCHASE_AMOUNT}`);
    lottos.forEach((lotto) => {
      this.#printConsole(`[${lotto.getLottoNumbers.join(", ")}]`);
    });
    return true;
  }

  announceLottery(lotteryResults) {
    return MESSAGES.COMMENT_WINNING_STATS.forEach((message, index) => {
      this.#printConsole(`${message}${lotteryResults[index]}개`);
    });
  }

  announceProfit(lotteryResults, purchaseAmmount) {
    return this.#printConsole(
      `${MESSAGES.COMMENT_PROFIT_PERCENTAGE_STATS}${Utils.calculateProfit(
        lotteryResults,
        purchaseAmmount
      )}%입니다.`
    );
  }

  /* ERROR */
  errorNoInput() {
    this.#printConsole(MESSAGES.ERROR_NO_INPUT);
    return false;
  }

  errorPurchaseCost() {
    this.#printConsole(MESSAGES.ERROR_INPUT_PURCHASING_NUMBER);
    return false;
  }

  errorWhiteSpace() {
    this.#printConsole(MESSAGES.ERROR_INPUT_WINNING_NUMBERS_WHITESPACE);
    return false;
  }

  errorWinningsRepeat() {
    this.#printConsole(MESSAGES.ERROR_INPUT_WINNING_NUMBERS_REPEATATION);
    return false;
  }

  errorWinnings() {
    this.#printConsole(MESSAGES.ERROR_INPUT_WINNING_NUMBERS);
    return false;
  }

  errorBonusRepeat() {
    this.#printConsole(MESSAGES.ERROR_INPUT_BONNUS_NUMBER_REPEATATION);
    return false;
  }

  errorBonus() {
    this.#printConsole(MESSAGES.ERROR_INPUT_BONUS_NUMBERS);
    return false;
  }
}

export default View;
