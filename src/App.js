import { MissionUtils } from "@woowacourse/mission-utils";
import buyLotto from "./components/buyLotto.js";

class App {
  async play() {
    let lotto = new buyLotto();
    await lotto.getUserCostToLotto();
    console.log(lotto.count);
    await lotto.getUserNumber();
    console.log(lotto.count);
    //lotto.getUserCost().then(lotto.getUserNumber());
  }
}

export default App;
