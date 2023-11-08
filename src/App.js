import { MissionUtils } from "@woowacourse/mission-utils";
import inputUserLotto from "./components/inputUserLotto.js";
import randomBuyLotto from "./components/randomBuyLotto.js";
import printWinner from "./components/printWinner.js";

class App {
  async play() {
    let lotto = new inputUserLotto();
    const count = await lotto.getUserCostToLotto();
    await lotto.getUserNumber();
    await lotto.getUserNumber("BONUS");

    const lottery = new randomBuyLotto(count);
    lottery.buyLottoTickets();
    lottery.printLottoTickets();

    let result = new printWinner(
      lottery.getLottoTickets(),
      lotto.numbers,
      lotto.bonus
    );
    result.print();
  }
}

export default App;
