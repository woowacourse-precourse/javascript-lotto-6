import { Console } from "@woowacourse/mission-utils";
import Messages from "../common/messages.js";
import validatePriceInput from "../util/validatePriceInput.js";
import ErrorMessages from "../common/errorMessages.js";

class PurchasePriceInput {
  async print() {
    let price = await Console.readLineAsync(Messages.PURCHASE_INPUT_MESSAGE);
    if (!validatePriceInput(price))
      throw new Error(ErrorMessages.PRICE_INPUT_ERRORMESSAGE);
  }
}

export default PurchasePriceInput;
