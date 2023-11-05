import { MissionUtils } from "@woowacourse/mission-utils";
import { getPurchase } from "./utils/getPurchase";
import { getLottoCount } from "./utils/getLottoCount";


class App {
  async play() {
    const cash = await getPurchase();
    const lottoCount = getLottoCount(cash);

    MissionUtils.Console.print(lottoCount);
  }
}

export default App;