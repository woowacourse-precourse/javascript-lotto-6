import InputAmount from "./Input/InputAmount.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import InputBonusNumber from "./input/InputBonusNumber.js";
import InputWinningNumbers from "./input/InputWinningNumbers.js";
class App {
  async play() {
    // const amount = await InputAmount();
    // MissionUtils.Console.print(amount);
    // const bonus = await InputBonusNumber();
    // MissionUtils.Console.print(bonus);
    const winningNumbers = await InputWinningNumbers();
    MissionUtils.Console.print(winningNumbers.getNumbers());
  }
}

export default App;
