import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/Log.js";
import { validateBonus } from "../validator/ValidateBonus.js";
/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
async function InputBonusNumber() {
  while (true) {
    try {
      const bonusStr = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.bonusLotto
      );
      validateBonus(bonusStr);
      return Number(bonusStr);
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }
}

export default InputBonusNumber;
