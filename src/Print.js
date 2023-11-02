import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/message.js";

class Print {
  static async getPurchaseSum() {
    const sum = await Console.readLineAsync(MESSAGE.GET_PURCHASE_SUM);
    return sum;
  }

  static async getUserLottoNumber() {
    const lotto = await Console.readLineAsync(MESSAGE.GET_USER_LOTTO);
    return lotto;
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
}

export default Print;
