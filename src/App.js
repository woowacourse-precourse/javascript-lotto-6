import InputAmount from "./Input/InputAmount.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const amount = await InputAmount();
    MissionUtils.Console.print(amount);
  }
}

export default App;
