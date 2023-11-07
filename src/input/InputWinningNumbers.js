import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/Log.js";
import Lotto from "../Lotto.js";

async function InputWinningNumbers() {
  const winningNumberStr = await MissionUtils.Console.readLineAsync(
    INPUT_MESSAGE.winningLotto
  );

  return new Lotto(winningNumberStr.split(",").map(Number));
}

export default InputWinningNumbers;
