import InputAmount from "./Input/InputAmount.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import InputBonusNumber from "./input/InputBonusNumber.js";
import InputWinningNumbers from "./input/InputWinningNumbers.js";
import RandomNumber from "./RandomNumber.js";
class App {
  async play() {
    // const amount = await InputAmount();
    // MissionUtils.Console.print(amount);
    // const bonus = await InputBonusNumber();
    // MissionUtils.Console.print(bonus);
    // const winningNumbers = await InputWinningNumbers();
    // MissionUtils.Console.print(winningNumbers.getNumbers());
    const lottoNumbers = RandomNumber(5);
    lottoNumbers.forEach((lottoNumber) => {
      MissionUtils.Console.print(lottoNumber.getNumbers());
    });
  }
}

export default App;
