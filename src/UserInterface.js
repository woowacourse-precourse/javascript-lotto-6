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

  static displayLottos(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}${MESSAGE.RESULT_LOTTO_COUNT}`);
    lottos.map((lotto) => {
      const numbers = lotto.getNumbers().join(", ");
      MissionUtils.Console.print(`[${numbers}]`);
    });
  }
}

export default UserInterface;
