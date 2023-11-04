import { MissionUtils } from "@woowacourse/mission-utils";
import { LottoMachine } from "./LottoMachine.js";
import * as func from "./Function.js";

class App {
  async play() {
    const PAYMENT = await func.getPayment();
    const LOTTO_MACHINE = new LottoMachine(PAYMENT);

    MissionUtils.Console.print(`${LOTTO_MACHINE.quantity}개를 구매했습니다.`);
    LOTTO_MACHINE.printInventory();

    let NUMBER_GUESS = (await func.getGuessNumber()).split(",");
    NUMBER_GUESS = NUMBER_GUESS.map(Number);
    let NUMBER_BONUS = await func.getBonusNumber();
    NUMBER_BONUS = Number(NUMBER_BONUS);
    LOTTO_MACHINE.calcPrize(NUMBER_GUESS, NUMBER_BONUS);
    LOTTO_MACHINE.printResult();
    func.printReturnRate(LOTTO_MACHINE.prize, PAYMENT);
  }
}

export default App;
