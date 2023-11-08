import Bonus from "./Bonus.js";
import Lotto from "./Lotto.js";
import MyLotto from "./MyLotto.js";
import { MESSAGE } from "./contants.js";
import { Console } from "@woowacourse/mission-utils";

import Play from "./Play.js";

class App {
  play() {
    const lottoGame = new Play();
    lottoGame.start();
  }
}

export default App;
