import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../util/constant.js";

const InputView = {
  async moneyInput() {
    try {
      const money = await Console.readLineAsync(MESSAGE.moneyInput);
      return money;
    } catch (error) {
      // 에러메시지, 여기부터 다시
      throw new Error(error);
    }
  },
};

export default InputView;
