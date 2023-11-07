import { inputAmount } from "./input/InputAmount.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidAmount } from "./utils/vaildator.js";
import { printLottoCount } from "./view/LottoCount.js";

class App {
  async play() {
    const amount = await inputAmount();
    isValidAmount(amount);

    const count = printLottoCount(amount);

  }
}

export default App;

const app = new App();
app.play();