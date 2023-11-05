import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import Validator from "./Validator.js";

const InputManager = {
  async inputPrice() {
    const price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    Validator.validatePrice(price);

    return price;
  },
};

export default InputManager;
