import { MissionUtils } from "@woowacourse/mission-utils";
import {
  LOTTO_INPUT_MESSAGE,
  LOTTO_OUTPUT_MESSAGE,
  ERROR_MESSAGE,
} from "./constants.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const purchaseCost = await MissionUtils.Console.readLineAsync(
      LOTTO_INPUT_MESSAGE.cost
    );

    const numOfLotto = purchaseCost / 1000;

    if (purchaseCost % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.isInvaildUnit);
    }

    let lottoNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    const lotto = new Lotto(lottoNum);
  }
}

export default App;
