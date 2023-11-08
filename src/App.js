import { MissionUtils } from "@woowacourse/mission-utils";
import buyLotto from "./components/buyLotto.js";

class App {
  async play() {
    let lotto = new buyLotto();
    await lotto.getUserCostToLotto();
    const WINNING_NUMBER = await lotto.getUserNumber();
    console.log(WINNING_NUMBER);
    const BONUS_NUMBER = await lotto.getUserNumber("BONUS");
    console.log(BONUS_NUMBER);
  }
}

export default App;
