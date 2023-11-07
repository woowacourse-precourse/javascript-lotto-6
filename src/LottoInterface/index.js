import { Console } from "@woowacourse/mission-utils";

import LOTTO_INTERFACE from "../constants/lottoInterface.js";
import {
  validateAmountToPurchase,
  validateBonusNumber,
  validateWinningNumbers,
} from "../validators/lottoInterface.js";

class LottoInterface {
  async readAmountToPurchase() {
    const answer = await Console.readLineAsync(
      LOTTO_INTERFACE.input.amountToPurchase,
    );
    validateAmountToPurchase(answer);
    return parseInt(answer, 10);
  }

  async readWinningNumbers() {
    const answer = await Console.readLineAsync(
      LOTTO_INTERFACE.input.winningNumbers,
    );
    validateWinningNumbers(answer);
    return answer.split(",");
  }

  async readBonusNumber() {
    const answer = await Console.readLineAsync(
      LOTTO_INTERFACE.input.bonusNumber,
    );
    validateBonusNumber(answer);
    return parseInt(answer, 10);
  }
}

export default LottoInterface;
