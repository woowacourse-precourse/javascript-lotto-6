import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_NUMBER_MESSAGE } from "./Constants.js";
import User from "./User.js";
import Lotto from "./Lotto.js";

class App {
  async inputNumber() {
    await MissionUtils.Console.print(INPUT_NUMBER_MESSAGE);
    const input = await MissionUtils.Console.readLineAsync("");
    const numbers = input.split(",");
    const lotto = new Lotto(numbers);
  }

  async play() {
    const user = new User();
    await user.play();
    await this.inputNumber();
  }
}

export default App;
