import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";

const InputView = {
  async readPurchasePrice() {
    return await Console.readLineAsync(GUIDE_MESSAGE.insertMoney);
  }
};

export default InputView;
