import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/Log.js";
import { validateBonus } from "../validator/ValidateBonus.js";

async function InputBonusNumber() {
  const t = true;
  while (t) {
    try {
      const bonusStr = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.bonusLotto
      );
      const bonus = Number(bonusStr);
      validateBonus(bonus);
      return bonus;
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }
}

export default InputBonusNumber;
