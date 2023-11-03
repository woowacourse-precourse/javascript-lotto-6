import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../util/constant.js";

const InputView = {
  async moneyInput() {
    try {
      const money = await Console.readLineAsync(MESSAGE.moneyInput);
      return money;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default InputView;
