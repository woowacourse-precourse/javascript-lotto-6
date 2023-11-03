import { MissionUtils } from "@woowacourse/mission-utils";
import { Lotto } from "./Lotto.js";
import { LottoMachine } from "./LottoMachine.js";
import * as func from "./Function.js";

class App {
  async play() {
    const PAYMENT = await func.getPayment();
    let NUMBER_GUESS = (await func.getGuessNumber()).split(",");
    const NUMBER_BONUS = await func.getBonusNumber();
    console.log(PAYMENT, NUMBER_BONUS, NUMBER_GUESS);
  }
}

export default App;
