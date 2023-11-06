import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../utils/validator.js";

const InputView = {
  async purchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return input;
  },
  async lottoNumber() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.");
    return input;
  },
};

export default InputView;
