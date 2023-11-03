import { getPurchase } from "../src/utils/getPurchase.js";
import { getLottoCount } from "./utils/getLottoCount.js";

import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);

    Console.print(lottoCount);
  }
}

export default App;
