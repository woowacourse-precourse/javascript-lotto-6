import { MissionUtils } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/constants.js";

class Input {
  async getPurchaseAmount(){
    const money = await MissionUtils.Console.readLineAsync(GUIDE_MESSAGE.insertMoney)

    return money.trim()
  }

  async getWinningNumbers() {
    const numbers = await MissionUtils.Console.readLineAsync(GUIDE_MESSAGE.insertWinnerNumbers)

    return numbers.trim()
  }

  async getBonusNumber() {
    const number = await MissionUtils.Console.readLineAsync(GUIDE_MESSAGE.insertBonusNumber)

    return number.trim();
  }
}

export default Input;