import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/Log.js";
import Lotto from "../Lotto.js";
/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

async function InputWinningNumber() {
  while (true) {
    try {
      const winningNumberStr = await MissionUtils.Console.readLineAsync(
        INPUT_MESSAGE.winningLotto
      );
      return new Lotto(winningNumberStr.split(",").map(Number));
    } catch (e) {
      MissionUtils.Console.print(e.message);
    }
  }
}

export default InputWinningNumber;
