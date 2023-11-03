import { MissionUtils } from "@woowacourse/mission-utils";
import { Lotto } from "./Lotto.js";
import { LottoMachine } from "./LottoMachine.js";
import * as func from "./Function.js";

class App {
  async play() {
    const PAYMENT = await func.getPayment();
    // console.log(PAYMENT, NUMBER_BONUS, NUMBER_GUESS);

    const LOTTO_MACHINE = new LottoMachine(PAYMENT);

    MissionUtils.Console.print(`${LOTTO_MACHINE.quantity}개를 구매했습니다.`);
    LOTTO_MACHINE.printInventory();

    let NUMBER_GUESS = (await func.getGuessNumber()).split(",");
    const NUMBER_BONUS = await func.getBonusNumber();
  }
}

export default App;
