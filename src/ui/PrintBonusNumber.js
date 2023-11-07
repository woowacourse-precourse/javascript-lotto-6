import { Console } from "@woowacourse/mission-utils";

import Messages from "../common/messages.js";
import validateBonusNumber from "../util/validateBonusNumber.js";
import ErrorMessages from "../common/errorMessages.js";

const printBonusNumber = async (winningLotto) => {
  while (true) {
    try {
      const bonusLotto = await Console.readLineAsync(
        Messages.GET_BONUS_NUMBER_MESSAGE
      );
      if (validateBonusNumber(winningLotto, bonusLotto))
        return Number(bonusLotto);
      throw new Error(ErrorMessages.BONUS_NUMBER_ERROR_MESSAGE);
    } catch (error) {
      Console.print(ErrorMessages.BONUS_NUMBER_ERROR_MESSAGE);
    }
  }
};

export default printBonusNumber;
