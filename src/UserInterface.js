import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant.js";
import Validation from "./Validation.js";

class UserInterface {
  static async getLottoPrice() {
    const input = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_LOTTO_PRICE);
    if (Validation.validateLottoPrice(input)) {
      return Number(input);
    }
  }
}

export default UserInterface;
