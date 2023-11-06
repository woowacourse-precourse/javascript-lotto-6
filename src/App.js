import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import InputManager from "./InputManager.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const price = await InputManager.inputPrice();
    const winningNumbers = await InputManager.getWinningNumbers();

    const lotto = new Lotto(winningNumbers);
  }
}

export default App;
