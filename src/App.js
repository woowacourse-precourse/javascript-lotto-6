import { inputAmount } from "./input/InputAmount.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidAmount } from "./utils/vaildator.js";
import { printLottoNum } from "./view/LottoNum.js";

class App {
  async play() {
    const amount = await inputAmount();
    isValidAmount(amount);

    const count = printLottoNum(amount);

  }
}

export default App;

const app = new App();
app.play();