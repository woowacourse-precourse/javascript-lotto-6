import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../utils/validator.js";

const InputView = {
  async purchaseAmount(callback) {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    try {
      InputValidator.purchaseAmount(input);
    } catch (error) {
      console.log(error);
      this.purchaseAmount(callback);
    }
    callback(input);
  },
};

export default InputView;
