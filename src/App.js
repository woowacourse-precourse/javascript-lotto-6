import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import InputManager from "./InputManager.js";
import BuyLotto from "./LottoPurchaser.js";

class App {
  async play() {
    const price = await InputManager.inputPrice();
  }
}

export default App;
