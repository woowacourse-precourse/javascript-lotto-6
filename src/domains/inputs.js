import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message.js";

const inputs = {
  async inputPrice() {
    const purchasePrice = await Console.readLineAsync(MESSAGE.input.price);
    return purchasePrice;
  },
};

export default inputs;
