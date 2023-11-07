import { Console } from "@woowacourse/mission-utils";
import { Print } from "../constants/constant.js";

async function readLineAndPrintBlank(prompt) {
  const input = await Console.readLineAsync(prompt);
  Console.print("");
  return input;
}

export const InputView = {
  async getLotto() {
    const LOTTO = await readLineAndPrintBlank(Print.start);
    return Number(LOTTO);
  },

  async getLotteryNumberArray() {
    const NUMBER_LIST = await readLineAndPrintBlank(Print.select_Number);
    return NUMBER_LIST.split(",").map(Number);
  },

  async getBonusNumber() {
    const BONUS_NUMBER = await readLineAndPrintBlank(Print.select_Bonus);
    return Number(BONUS_NUMBER);
  },
};
