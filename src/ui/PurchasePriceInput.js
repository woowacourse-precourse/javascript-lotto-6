import { Console } from "@woowacourse/mission-utils";

import Messages from "../common/messages.js";
import validatePriceInput from "../util/validatePriceInput.js";
import ErrorMessages from "../common/errorMessages.js";
import printPurchaseLotto from "./PrintPurchaseLottos.js";

const purchasePriceInput = async () => {
  let price = await Console.readLineAsync(Messages.PURCHASE_INPUT_MESSAGE);
  if (!validatePriceInput(price))
    throw new Error(ErrorMessages.PRICE_INPUT_ERRORMESSAGE);
  printPurchaseLotto(price / 1000);
};

export default purchasePriceInput;
