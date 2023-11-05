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

  static async getWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBERS);
    if (Validation.validateWinningNumbers(input)) {
      return input.split(",").map((number) => Number(number));
    }
  }

  static async getBonusNumber(winningNumbers) {
    const input = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
    if (Validation.validateBonusNumber(input, winningNumbers)) {
      return Number(input);
    }
  }
}

export default UserInterface;
