import { MissionUtils } from "@woowacourse/mission-utils";
import inputUserLotto from "./components/inputUserLotto.js";
import randomBuyLotto from "./components/randomBuyLotto.js";

class App {
  async play() {
    let lotto = new inputUserLotto();
    const count = await lotto.getUserCostToLotto();
    await lotto.getUserNumber();
    await lotto.getUserNumber("BONUS");
    console.log(lotto);

    const lottery = new randomBuyLotto(count);
    lottery.buyLottoTickets();
    lottery.printLottoTickets();
  }
}

export default App;
