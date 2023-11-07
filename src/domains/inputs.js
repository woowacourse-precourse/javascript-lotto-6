import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

const inputs = {
  // 구입 금액 입력
  async inputPrice() {
    const price = await Console.readLineAsync(MESSAGE.input.price);
    return price;
  },
};

export default inputs;
