import { Console } from "@woowacourse/mission-utils";
import amountInputError from "../errors/amountInputError";

const AmountInput = async () => {
  let isValid = false;
  while (!isValid) {
    try {
      const amount = await Console.readLineAsync("구입금액을 입력해 주세요.");
      amountInputError(amount);
      isValid = true;
      return amount;
    } catch (e) {
      Console.print(e.message);
    }
  }
};
export default AmountInput;
