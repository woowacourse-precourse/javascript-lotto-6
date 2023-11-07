import { INPUT_MSG } from "./constants/constants";
import { Console } from "@woowacourse/mission-utils";

export const ConsoleInput = {
  async inputLottoPrice() {
    const price = await Console.readLineAsync(INPUT_MSG.ENTER_PRICE);
    return price;
  },

  async inputLottoResult() {
    const numbers = await Console.readLineAsync(INPUT_MSG.LOTTERY_NUMS);
    return numbers.split(",").map(Number);
  },

  async inputBonusNumber() {
    const bonus = await Console.readLineAsync(INPUT_MSG.BONUS_NUM);
    return Number(bonus);
  },
};
