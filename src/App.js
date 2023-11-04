import { getPurchase } from "../src/utils/getPurchase.js";
import { getLottoCount } from "./utils/getLottoCount.js";
import { createLotto } from "./utils/createLotto.js";

import Lotto from "./Lotto.js"
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);

    createLotto(lottoCount);
  }
}

export default App;
