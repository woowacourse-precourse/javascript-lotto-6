import { MissionUtils } from "@woowacourse/mission-utils";
import { LottoMachine } from "./LottoMachine.js";
import * as func from "./Function.js";
import * as valid from "./Validation.js";

class App {
  async play() {
    let flag = true;
    let PAYMENT;
    while (flag) {
      try {
        PAYMENT = await func.getPayment();
        valid.paymentCheck(PAYMENT);
        flag = false;
      } catch (Error) {
        flag = true;
      }
    }

    const LOTTO_MACHINE = new LottoMachine(PAYMENT);

    MissionUtils.Console.print(`${LOTTO_MACHINE.quantity}개를 구매했습니다.`);
    LOTTO_MACHINE.printInventory();

    flag = true;
    let NUMBER_GUESS;
    while (flag) {
      try {
        NUMBER_GUESS = (await func.getGuessNumber()).split(",");
        NUMBER_GUESS = NUMBER_GUESS.map(Number);
        valid.guessNumberCheck(NUMBER_GUESS);
        flag = false;
      } catch (Error) {
        flag = true;
      }
    }

    flag = true;
    let NUMBER_BONUS;
    while (flag) {
      try {
        NUMBER_BONUS = await func.getBonusNumber();
        valid.bonusNumberCheck(NUMBER_GUESS, NUMBER_BONUS);
        NUMBER_BONUS = Number(NUMBER_BONUS);
        flag = false;
      } catch (Error) {
        flag = true;
      }
    }

    LOTTO_MACHINE.calcPrize(NUMBER_GUESS, NUMBER_BONUS);
    LOTTO_MACHINE.printResult();
    func.printReturnRate(LOTTO_MACHINE.prize, PAYMENT);
  }
}

export default App;
