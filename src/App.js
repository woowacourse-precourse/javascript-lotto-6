import { MissionUtils } from "@woowacourse/mission-utils";
import buyLotto from "./components/buyLotto.js";

class App {
  async play() {
    console.log("시작");
    let lotto = new buyLotto();
    await lotto.getUserCostToLotto();
    console.log(lotto.count);
    const WINNING_NUMBER = await lotto.getUserNumber();
    console.log(WINNING_NUMBER);
    //lotto.getUserCost().then(lotto.getUserNumber());
  }
}

export default App;
