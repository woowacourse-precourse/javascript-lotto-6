import { Console } from "@woowacourse/mission-utils";
import {
  validateAmountToPurchase,
  validateBonusNumber,
  validateWinningNumbers,
} from "../validators/input.js";
import LOTTO_INTERFACE from "../constants/lottoInterface.js";

export const readAmountToPurchase = async () => {
  const answer = await Console.readLineAsync(
    LOTTO_INTERFACE.input.amountToPurchase,
  );
  validateAmountToPurchase(answer);
  return answer;
};

export const readWinningNumbers = async () => {
  const answer = await Console.readLineAsync(
    LOTTO_INTERFACE.input.winningNumbers,
  );
  validateWinningNumbers(answer);
  return answer;
};

export const readBonusNumber = async () => {
  const answer = await Console.readLineAsync(LOTTO_INTERFACE.input.bonusNumber);
  validateBonusNumber(answer);
  return answer;
};
