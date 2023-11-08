import { Console } from "@woowacourse/mission-utils";
import PRINT_MESSAGE from "../Constant/PrintMessage";

const Input = {
  async lottoPrice() {
    const purchaseAmount = await Console.readLineAsync(
      PRINT_MESSAGE.REQUEST_PURCHASE_AMOUNT
    );

    Validator.InputPurchaseAmount(purchaseAmount);
    return purchaseAmount;
  },
};

export default Input;