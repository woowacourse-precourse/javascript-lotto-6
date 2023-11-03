import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate.js";

class WinningNum {
  async askWinngNum() {
    const userInputWinningNum = await MissionUtils.Console.readLineAsync("");
    const winningNum = userInputWinningNum.split(",");
    Validator.validateInputMoney(winningNum);

    return winningNum;
  }

  async askBonusNum() {
    const userInputBonusNum = await MissionUtils.Console.readLineAsync("");
    const bonusNum = userInputBonusNum.split(",");
    Validator.validateInputMoney(bonusNum);

    return bonusNum;
  }
}
export default WinningNum;
