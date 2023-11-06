import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/message";

const inputs = {
  async inputPrice() {
    const purchasePrice = await Console.readLineAsync(MESSAGE.input.price);
    return purchasePrice;
  },
};

export default inputs;
