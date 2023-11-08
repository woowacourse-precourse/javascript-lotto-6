import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./messages.js";

export default class InputView {
  static async promptToBuyLottos() {
    const money = await Console.readLineAsync(
      `${MESSAGES.PROMPT_PURCHASE_VALUE}\n`
    );
    return money.trim();
  }

  static async promptForDrawnLottoNumbers() {
    const drawnLottoNumbers = await Console.readLineAsync(
      `\n${MESSAGES.PROMPT_DRAWN_LOTTO_NUMBERS}\n`
    );
    return drawnLottoNumbers
      .trim()
      .replace(/(,+)$/, "")
      .split(",")
      .map((number) => number.trim());
  }

  static async promptForBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      `\n${MESSAGES.PROMPT_BONUS_NUMBER}\n`
    );
    return bonusNumber.trim();
  }
}
