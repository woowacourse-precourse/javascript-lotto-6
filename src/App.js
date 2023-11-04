import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";
import Functions from "./Functions.js";
import Inoutput from "./Inoutput.js";

class App {
  async play() {
    const functions = new Functions();
    const amount = await Inoutput.buyLotto();
    const lottoList = functions.buyLottoByAmount(amount);
  }
}

export default App;
