import { Console } from "@woowacourse/mission-utils";

import LOTTO_INTERFACE from "../constants/lottoInterface.js";
import {
  validateAmountToPurchase,
  validateBonusNumber,
  validateWinningNumbers,
} from "../validators/input.js";

class LottoInterface {
  async readAmountToPurchase() {
    const answer = await Console.readLineAsync(
      LOTTO_INTERFACE.input.amountToPurchase,
    );
    validateAmountToPurchase(answer);
    return answer;
  }

  async readWinningNumbers() {
    const answer = await Console.readLineAsync(
      LOTTO_INTERFACE.input.winningNumbers,
    );
    validateWinningNumbers(answer);
    return answer;
  }

  async readBonusNumber() {
    const answer = await Console.readLineAsync(
      LOTTO_INTERFACE.input.bonusNumber,
    );
    validateBonusNumber(answer);
    return answer;
  }
}

export default LottoInterface;
