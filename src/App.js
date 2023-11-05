import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from './InputView.js';

class App {
  async play() {
    const input = await InputView.readPurchasePrice();
    MissionUtils.Console.print(input);
  }
}

export default App;
