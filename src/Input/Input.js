import { Console } from "@woowacourse/mission-utils";

const Input = {
  async lottoPrice() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );

    Validator.InputPurchaseAmount(purchaseAmount);
    return purchaseAmount;
  },
};

export default Input;