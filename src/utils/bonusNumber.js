import { MissionUtils } from "@woowacourse/mission-utils";
import Bonus from "../Bonus.js";

async function bonusNumber() {
  try {
    const GET_BONUSNUMBER = await MissionUtils.Console.readLineAsync("");
    new Bonus(GET_BONUSNUMBER);
    return GET_BONUSNUMBER;
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

export default bonusNumber;
