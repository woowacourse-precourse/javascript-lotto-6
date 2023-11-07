import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constatns/message.js"
import { validAmountCheck, validWinningNumberCheck } from "../validator.js"

export const getUserAmount = async () => {
  try {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.AMOUNT);
    await validAmountCheck(input);
    return input;
  } catch (error) {
    throw error;
  }
}

export const getWinningNumber = async () => {
  try {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.WIN_NUM);
    const winningNumber = await validWinningNumberCheck(input);
    return winningNumber;
  } catch (error) {
    throw error;
  }
}