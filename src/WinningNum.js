import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validate.js";

class WinningNum {
  async askWinngNum() {
    const userInputWinningNum = await MissionUtils.Console.readLineAsync("");
    const winningNum = userInputWinningNum.split(",");

    const userInputBonusNum = await MissionUtils.Console.readLineAsync("");
    const bonusNum = userInputBonusNum.split(",");

    console.log(winningNum);
  }
}
export default WinningNum;
