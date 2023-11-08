import { MissionUtils } from "@woowacourse/mission-utils";
import Money from "./Money.js";
import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";

class App extends Input{
  async play() {
    Money.getMoney();
  }
}

export default App;
