import { inputAmount } from "./input/InputAmount.js";
import { MissionUtils } from "@woowacourse/mission-utils";import { validAmount } from "./vaildator/VaildAmount.js";
class App {
  async play() {
    const amount = await inputAmount();
    validAmount(amount)
  }
}

export default App;

const app = new App();
app.play();