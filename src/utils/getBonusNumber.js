import { Console } from "@woowacourse/mission-utils";
import { inputMessage } from "../constants/messages.js";

export const getBonusNumber = async () => {
  const input = await Console.readLineAsync(inputMessage.BONUS_MESSAGE);
  const bonusNumber = parseInt(input);

  return bonusNumber;
};
