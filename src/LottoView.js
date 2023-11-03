import { MissionUtils } from "@woowacourse/mission-utils"
import { toSorted } from "./utils.js";

class LottoView {
  static printLottoNumbers(numbers) {
    const message = LottoView.toLottoNumbersFormat(numbers);

    MissionUtils.Console.print(message);
  }

  static toLottoNumbersFormat(numbers) {
    const sortedNumbers = toSorted(numbers, (a, b) => a - b);

    const numbersText = sortedNumbers.join(", ");
    const message = `[${numbersText}]`;

    return message;
  }
}

export default LottoView;
