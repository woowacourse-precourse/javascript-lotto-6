import { MissionUtils } from "@woowacourse/mission-utils";
import { ErrorMessage } from "../Message";

export default class GameUtil {
  buyingMoneyValidator(buyingMoney) {
    if (buyingMoney % 1000) {
      MissionUtils.Console.print(ErrorMessage.INVALID_BUYING_MONEY);
      throw new Error(ErrorMessage.INVALID_BUYING_MONEY);
    }
    if (/\D/.test(buyingMoney)) {
      MissionUtils.Console.print(ErrorMessage.INVALID_MONEY_TYPE);
      throw new Error(ErrorMessage.INVALID_MONEY_TYPE);
    }
  }
}
