import { ERROR_MESSAGES, MESSAGES } from "./constants/messages";

export class InputValidator {
  moneyValidator(money) {
    if (!Number(money)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    } else if (Number(money) < 1000) {
      throw new Error(ERROR_MESSAGES.IT_IS_TO_SMALL);
    } else if (money.includes(".") || money.includes(" ")) {
      throw new Error(ERROR_MESSAGES.ONLY_NUMBER);
    } else if (!Number(money) % 1000 === 0) {
      throw new Error(ERROR_MESSAGES.ONLY_THOUSANDWON_UNIT);
    }
  }
}
