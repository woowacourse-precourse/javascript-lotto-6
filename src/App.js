import { MissionUtils } from "@woowacourse/mission-utils";
import {
  MESSAGE_BONUS_NUMBER,
  MESSAGE_COUNT_UNIT,
  MESSAGE_PURCHASING_AMOUNT,
  MESSAGE_RATE,
  MESSAGE_RATE_UNIT,
  MESSAGE_WINNING_ALL,
  MESSAGE_WINNING_BLANK,
  MESSAGE_WINNING_BONUS,
  MESSAGE_WINNING_FIVE,
  MESSAGE_WINNING_FOUR,
  MESSAGE_WINNING_INFO,
  MESSAGE_WINNING_NUMBER,
  MESSAGE_WINNING_THREE,
} from "./constants/message.js";
import Purchase from "./Purchase.js";
import Issuance from "./Issuance.js";
import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import {
  MIN_AMOUNT,
  PERCENTAGE,
  WINNING_DIVISION,
} from "./constants/standard.js";

class App {
  async play() {
    let purchase = null;
    let lotto = null;
    let bonus = null;

    while (!purchase) {
      try {
        purchase = new Purchase(
          await MissionUtils.Console.readLineAsync(MESSAGE_PURCHASING_AMOUNT)
        );
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const issuance = new Issuance(purchase.getPurchaseCount());
    await issuance.printIssuanceNumbers(purchase.getPurchaseCount());

    while (!lotto) {
      try {
        const winningNumber = await MissionUtils.Console.readLineAsync(
          MESSAGE_WINNING_NUMBER
        );
        lotto = new Lotto(winningNumber.split(WINNING_DIVISION));
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    while (!bonus) {
      try {
        bonus = new Bonus(
          await MissionUtils.Console.readLineAsync(MESSAGE_BONUS_NUMBER),
          lotto.get()
        );
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const { lottoResult, totalProfits } = await lotto.result(
      issuance.get(),
      bonus.get()
    );

    const profitsRate = parseFloat(
      (totalProfits / (purchase.getPurchaseCount() * MIN_AMOUNT)) * PERCENTAGE
    ).toFixed(1);

    MissionUtils.Console.print(`
${MESSAGE_WINNING_INFO}
${MESSAGE_WINNING_BLANK}
${MESSAGE_WINNING_THREE}${lottoResult[0]}${MESSAGE_COUNT_UNIT}
${MESSAGE_WINNING_FOUR}${lottoResult[1]}${MESSAGE_COUNT_UNIT}
${MESSAGE_WINNING_FIVE}${lottoResult[2]}${MESSAGE_COUNT_UNIT}
${MESSAGE_WINNING_BONUS}${lottoResult[3]}${MESSAGE_COUNT_UNIT}
${MESSAGE_WINNING_ALL}${lottoResult[4]}${MESSAGE_COUNT_UNIT}
${MESSAGE_RATE}${parseFloat(profitsRate)}${MESSAGE_RATE_UNIT}
    `);
  }
}

export default App;
