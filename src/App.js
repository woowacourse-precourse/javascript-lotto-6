import { getPurchase } from "../src/utils/getPurchase.js";
import { getLottoCount } from "./utils/getLottoCount.js";
import { createLotto } from "./utils/createLotto.js";
import { getLottoNumber } from "./utils/getLottoNumber.js";
import { getBonusNumber } from "./utils/getBonusNumber.js";
import { getLottoResult } from "./utils/getLottoResult.js";
import { getRanking, getRankResult } from "./utils/getLottoRanking.js";

import Lotto from "./Lotto.js"
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);
    
    const lottoArray = createLotto(lottoCount);

    const winningLotto = await getLottoNumber();
    const bonus = await getBonusNumber();

    winningLotto.getBonus(bonus);
    const winningCount = getLottoResult(lottoArray, winningLotto);

    const lottoRanking = getRanking(winningCount);
    getRankResult(lottoRanking);
  }
}

export default App;
