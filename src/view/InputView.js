import { Console } from "@woowacourse/mission-utils";
import Calculator from "../utils/calc/Calculator.js";

const InputView = {
  async readPurchasePrice() {
    try {
      const purchasePrice = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      const purchaseQuantity = Calculator.calcPurchaseQuantity(purchasePrice);
      return purchaseQuantity;
    } catch (error) {}
  },
};

export default InputView;
