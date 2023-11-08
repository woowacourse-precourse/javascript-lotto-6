import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/Log.js";
import { validateAmount } from "../validator/ValidateAmount.js";
/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

async function InputAmount() {
  while (true) {
    try {
      const amountStr = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.amount
      );
      validateAmount(amountStr);
      return Number(amountStr);
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }
}

export default InputAmount;
