import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_NUMBER_MESSAGE } from "./Constants.js";
import { INPUT_BONUS_MESSAGE } from "./Constants.js";
import User from "./User.js";
import Lotto from "./Lotto.js";

class App {
  async inputNumber() {
    await MissionUtils.Console.print("\n" + INPUT_NUMBER_MESSAGE);
    const input = await MissionUtils.Console.readLineAsync("");
    const numbers = input.split(",");
    const lotto = new Lotto(numbers);
  }

  async inputBonus() {
    await MissionUtils.Console.print("\n" + INPUT_BONUS_MESSAGE);
    const bonus = Number(await MissionUtils.Console.readLineAsync(""));

    return bonus;
  }

  async play() {
    const user = new User();
    await user.play();
    await this.inputNumber();
    await this.inputBonus();
  }
}

export default App;
