import { getPurchase } from "../src/utils/getPurchase.js";
import { getLottoCount } from "./utils/getLottoCount.js";

import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);

    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }
}

export default App;
