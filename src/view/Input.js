import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constatns/message.js"
import { validAmountCheck, validBonusNumberCheck } from "../validator.js"
import { changeArrayStringIntoNumber } from "../utils.js"

export const getUserAmount = async () => {

  const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.AMOUNT);
  const validator_result = await validAmountCheck(input);
  if (validator_result !== input) {
    throw validator_result;
  }
  return input;
}

export const getWinningNumber = async () => {
  const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.WIN_NUM);
  const winningNumbersArray = changeArrayStringIntoNumber(input.split(","));
  return winningNumbersArray;

}

export const getBonusNumber = async () => {

  const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.BONUS_NUM);
  const validator_result = await validBonusNumberCheck(input);
  if (validator_result !== input) {
    throw validator_result;
  }
  return input;

}