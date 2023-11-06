import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constatns/message.js"
import { validAmountCheck } from "../validator.js"

export const getUserAmount = async () => {
  try {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.AMOUNT);
    await validAmountCheck(input);
    return input;
  } catch (error) {
    throw error;
  }
}