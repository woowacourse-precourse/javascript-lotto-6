import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { getPayLottoAmount } from "./function/getPayLottoAmount.js";
import { getWinningCount } from "./function/getWinningCount.js";
import { calculateLottoCount } from "./function/util/calculateLottoCount.js";

class App {
  async play() {
    try {
      const userPayAmount = await getPayLottoAmount();
      const lottoCount = calculateLottoCount(userPayAmount);
      const lottos = Lotto.buyLotto(userPayAmount, lottoCount);
      const winNumbers = await getWinningCount();
      const resultLotto = new Lotto(winNumbers);
      await resultLotto.printLottoResult(userPayAmount, lottos);
    } catch (err) {
      Console.print(err.message);
    }
  }
}

export default App;
