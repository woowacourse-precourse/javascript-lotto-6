import { MissionUtils } from "@woowacourse/mission-utils";
import {
  MIN,
  MAX,
  INPUT_NUMBER_MESSAGE,
  INPUT_BONUS_MESSAGE,
  INPUT_RANGE_ERROR_MESSAGE,
  MONEY_ARRAY,
  NUM_ARRAY,
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

    this.validateBonus(BONUS);

    return BONUS;
  }

  async validateBonus(BONUS) {
    if (BONUS > MAX || BONUS < MIN || BONUS !== parseInt(BONUS)) {
      throw new Error(INPUT_RANGE_ERROR_MESSAGE);
    }
  }

  async printStats(STATS) {
    const STATS_ARRAY = [
      STATS.MATCH_THREE,
      STATS.MATCH_FOUR,
      STATS.MATCH_FIVE,
      STATS.MATCH_BONUS,
      STATS.MATCH_ALL,
    ];

    MissionUtils.Console.print("");

    for (let i = 0; i < 5; i++) {
      await MissionUtils.Console.print(
        NUM_ARRAY[i] +
          "개 일치 " +
          MONEY_ARRAY[i] +
          " - " +
          STATS_ARRAY[i] +
          "개"
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
    ).toFixed(2);

    const YIELD_PRINT_MESSAGE = "\n총 수익률은" + YIELD + "%입니다.";

    MissionUtils.Console.print(YIELD_PRINT_MESSAGE);
  }

  async play() {
    const user = new User();
    const MONEY = await user.play();
    const NUMBERS = await this.inputNumber();
    const lotto = new Lotto(NUMBERS);
    const CORRECT = lotto.getNumbers();
    const BONUS = await this.inputBonus();
    const STATS = user.matching(CORRECT, BONUS);
    await this.printStats(STATS);
    this.printYield(STATS, MONEY);
  }
}

export default App;
