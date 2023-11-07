import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, STATISTICS } from "./constants/message";

class Print {
  static async getPurchaseSum() {
    const sum = await Console.readLineAsync(MESSAGE.GET_PURCHASE_SUM);
    return sum;
  }

  static async getUserLottoNumber() {
    const lotto = await Console.readLineAsync(MESSAGE.GET_USER_LOTTO);
    return lotto;
  }

  static async getUserBonusNumber() {
    const bonus = await Console.readLineAsync(MESSAGE.GET_USER_BONUS_NUMBER);
    return bonus;
  }

  static showPurchaseMessage(amount) {
    Console.print(MESSAGE.SHOW_LOTTO_AMOUNT(amount));
  }

  static showLotto(lotto) {
    Console.print(MESSAGE.SHOW_LOTTO_NUMBER(lotto));
  }

  static showErrorMessage(message) {
    Console.print(message);
  }

  static showResultPhrase() {
    Console.print(MESSAGE.SHOW_RESULT_PHRASE);
  }

  static showStatistic(statistic, rankIndex) {
    Console.print(STATISTICS(statistic, rankIndex));
  }

  static showEarningRate(rate) {
    Console.print(MESSAGE.SHOW_EARNING_RATE(rate));
  }
}

export default Print;
