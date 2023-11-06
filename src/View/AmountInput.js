import { Console } from "@woowacourse/mission-utils";

const AmountInput = async () => {
  return await Console.readLineAsync("구입금액을 입력해 주세요.");
};

export default AmountInput;
