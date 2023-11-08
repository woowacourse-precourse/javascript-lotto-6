import { Console } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator";

const Input = {
  async lottoPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    Validator.InputPurchaseAmount(purchaseAmount);
    return purchaseAmount;
  },
};

export default Input;
