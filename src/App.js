import { MissionUtils } from "@woowacourse/mission-utils";
import {
  MIN,
  MAX,
  INPUT_NUMBER_MESSAGE,
  INPUT_BONUS_MESSAGE,
  INPUT_RANGE_ERROR_MESSAGE,
} from "./Constants.js";
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
    const BONUS = Number(await MissionUtils.Console.readLineAsync(""));

    this.validateBonus(BONUS);
  }

  async validateBonus(BONUS) {
    if (BONUS > MAX || BONUS < MIN || BONUS !== parseInt(BONUS)) {
      throw new Error(INPUT_RANGE_ERROR_MESSAGE);
    }
  }

  async play() {
    const user = new User();
    await user.play();
    await this.inputNumber();
    await this.inputBonus();
  }
}

export default App;
