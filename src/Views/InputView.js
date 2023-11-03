import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./messages";

export default class InputView {
  static async promptToBuyLottos() {
    const money = await Console.readLineSync(
      `${MESSAGES.PROMPT_PURCHASE_VALUE}\n`
    );
    return money.trimt();
  }

  static async promptForDrawnLottoNumbers() {
    const drawnLottoNumbers = await Console.readLineSync(
      `${MESSAGES.PROMPT_DRAWN_LOTTO_NUMBERS}\n`
    );
    return drawnLottoNumbers.split(",").map((number) => number.trim());
  }

  static async promptForBonusNumber() {
    const bonusNumber = await Console.readLineSync(
      `${MESSAGES.PROMPT_BONUS_NUMBER}\n`
    );
    return bonusNumber;
  }
}
