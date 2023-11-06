import { MissionUtils } from "@woowacourse/mission-utils";
import lottoAmountSentence from "./utils/LottoAmountSentence.js";
import lottoAmountCount from "./utils/lottoAmountCount.js";
import purchaseAmountSave from "./utils/purchaseAmountSave.js";
import purchaseAmountSentence from "./utils/purchaseAmountSentence.js";

class App {
  async play() {
    purchaseAmountSentence();
    const PURCHASE_AMOUNT = await purchaseAmountSave();
    await lottoAmountSentence(PURCHASE_AMOUNT);
    purchaseLottosNumber(PURCHASE_AMOUNT);
  }
}

async function purchaseLottosNumber(purchaseAmount) {
  const LOTTOS_AMOUNT = await lottoAmountCount(purchaseAmount);
  const LOTTOS_NUMBER = {};
  for (let i = 0; i < LOTTOS_AMOUNT; i++) {
    LOTTOS_NUMBER[`lottos${i}`] = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    ).sort((a, b) => a - b);

    MissionUtils.Console.print(LOTTOS_NUMBER[`lottos${i}`]);
  }
}

export default App;
