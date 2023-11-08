import { MissionUtils } from "@woowacourse/mission-utils";
import inputUserLotto from "./components/inputUserLotto.js";

class App {
  async play() {
    let lotto = new inputUserLotto();
    await lotto.getUserCostToLotto();
    await lotto.getUserNumber();
    await lotto.getUserNumber("BONUS");
    console.log(lotto);
  }
}

export default App;
