import { INPUT_MSG } from "../constants/constants.js";
import { Console } from "@woowacourse/mission-utils";

export default class ConsoleInput {
  async inputLottoPrice() {
    const price = await Console.readLineAsync(INPUT_MSG.ENTER_PRICE);
    return price;
  }

  async inputLottoResult() {
    const numbers = await Console.readLineAsync(INPUT_MSG.LOTTERY_NUMS);
    return numbers.split(",").map(Number);
  }

  async inputBonusNumber() {
    const bonus = await Console.readLineAsync(INPUT_MSG.BONUS_NUM);
    return Number(bonus);
  }
}
