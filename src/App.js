import { MissionUtils } from "@woowacourse/mission-utils";
import {
  MIN,
  MAX,
  INPUT_NUMBER_MESSAGE,
  INPUT_BONUS_MESSAGE,
  INPUT_RANGE_ERROR_MESSAGE,
  INCLUDE_BONUS_ERROR_MESSAGE,
  INPUT_NUMBER_ERROR_MESSAGE,
  MONEYS,
  NUMS,
  THREE_MATCH_MONEY,
  FOUR_MATCH_MONEY,
  FIVE_MATCH_MONEY,
  BONUS_MATCH_MONEY,
  ALL_MATCH_MONEY,
} from "./Constants.js";

import User from "./User.js";
import Lotto from "./Lotto.js";

class App {
  async inputNumber() {
    await MissionUtils.Console.print("\n" + INPUT_NUMBER_MESSAGE);
    const input = await MissionUtils.Console.readLineAsync("");
    const NUMBERS = input.split(",");

    return NUMBERS;
  }

  async inputBonus() {
    await MissionUtils.Console.print("\n" + INPUT_BONUS_MESSAGE);
    const BONUS = Number(await MissionUtils.Console.readLineAsync(""));

    return BONUS;
  }

  async validateBonus(BONUS, NUMBERS) {
    if (BONUS > MAX || BONUS < MIN || BONUS !== parseInt(BONUS)) {
      throw new Error(INPUT_RANGE_ERROR_MESSAGE);
    }

    if (NUMBERS.includes(BONUS.toString())) {
      throw new Error(INCLUDE_BONUS_ERROR_MESSAGE);
    }
  }

  async printStats(STATS) {
    const STATISTICS = [
      STATS.MATCH_THREE,
      STATS.MATCH_FOUR,
      STATS.MATCH_FIVE,
      STATS.MATCH_BONUS,
      STATS.MATCH_ALL,
    ];

    MissionUtils.Console.print("");

    for (let i = 0; i < 5; i++) {
      await MissionUtils.Console.print(
        NUMS[i] + "개 일치" + MONEYS[i] + " - " + STATISTICS[i] + "개"
      );
    }
  }

  printYield(STATS, MONEY) {
    const YIELD = (
      ((STATS.MATCH_THREE * THREE_MATCH_MONEY +
        STATS.MATCH_FOUR * FOUR_MATCH_MONEY +
        STATS.MATCH_FIVE * FIVE_MATCH_MONEY +
        STATS.MATCH_BONUS * BONUS_MATCH_MONEY +
        STATS.MATCH_ALL * ALL_MATCH_MONEY) /
        MONEY) *
      100
    ).toFixed(1);

    const YIELD_PRINT_MESSAGE =
      "\n총 수익률은 " + YIELD.toString() + "%입니다.";

    MissionUtils.Console.print(YIELD_PRINT_MESSAGE);
  }

  async play() {
    const user = new User();
    const MONEY = await user.play();

    const lotto = new Lotto();

    let test = "fail";
    let numbers = 0;

    while (test === "fail") {
      numbers = await this.inputNumber();
      try {
        lotto.validate(numbers);
        test = "success";
      } catch (error) {
        MissionUtils.Console.print(INPUT_NUMBER_ERROR_MESSAGE);
      }
    }

    numbers.forEach((number) => {
      Number(number);
    });

    let bonusTest = "fail";
    let bonus = 0;

    while (bonusTest === "fail") {
      bonus = await this.inputBonus();

      try {
        await this.validateBonus(bonus, numbers);
        bonusTest = "success";
      } catch (error) {
        MissionUtils.Console.print(INPUT_NUMBER_ERROR_MESSAGE);
      }
    }

    const STATS = user.matching(numbers, bonus);
    await this.printStats(STATS);
    this.printYield(STATS, MONEY);
  }
}

export default App;
