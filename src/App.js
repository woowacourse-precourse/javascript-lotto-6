import { getPurchase } from "../src/utils/getPurchase.js";
import { getLottoCount } from "./utils/getLottoCount.js";
import { createLotto } from "./utils/createLotto.js";
import { getLottoNumber } from "./utils/getLottoNumber.js";
import { getBonusNumber } from "./utils/getBonusNumber.js";

import Lotto from "./Lotto.js"
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);
    
    createLotto(lottoCount);

    const lotto = await getLottoNumber();
    const bonus = await getBonusNumber();
    lotto.getBonus(bonus);
  }
}

export default App;
