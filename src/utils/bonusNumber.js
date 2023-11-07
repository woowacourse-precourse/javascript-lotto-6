import { MissionUtils } from "@woowacourse/mission-utils";
import Bonus from "../Bonus.js";
import bonusNumberSentence from "./bonusNumberSentence.js";

async function bonusNumber() {
  try {
    bonusNumberSentence();
    const GET_BONUSNUMBER = await MissionUtils.Console.readLineAsync("");
    const bonusNumber = Math.floor(GET_BONUSNUMBER);
    new Bonus(bonusNumber);
    return bonusNumber;
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

export default bonusNumber;
