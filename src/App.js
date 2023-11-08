import { MissionUtils } from "@woowacourse/mission-utils";
import { literationNumbers, literationBonus } from "./Function.js";
import {
  MIN,
  MAX,
  INPUT_NUMBER_MESSAGE,
  INPUT_BONUS_MESSAGE,
  INPUT_RANGE_ERROR_MESSAGE,
  INCLUDE_BONUS_ERROR_MESSAGE,
  MONEYS,
  NUMS,
  THREE_MATCH_MONEY,
  FOUR_MATCH_MONEY,
  FIVE_MATCH_MONEY,
  BONUS_MATCH_MONEY,
  ALL_MATCH_MONEY,
  CORRECTS,
  CORRECT_COUNT,
  YIELD_HEAD,
  YIELD_TAIL,
} from "./Constants.js";

import User from "./User.js";

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
        NUMS[i] + CORRECTS + MONEYS[i] + " - " + STATISTICS[i] + CORRECT_COUNT
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

    const YIELD_PRINT_MESSAGE = YIELD_HEAD + YIELD.toString() + YIELD_TAIL;

    MissionUtils.Console.print(YIELD_PRINT_MESSAGE);
  }

  async play() {
    const user = new User();
    const MONEY = await user.play();
    const NUMBERS = await literationNumbers();
    const BONUS = await literationBonus(NUMBERS);
    const STATS = user.matching(NUMBERS, BONUS);
    await this.printStats(STATS);
    this.printYield(STATS, MONEY);
  }
}

export default App;
