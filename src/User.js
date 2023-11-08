import * as MissionUtils from "@woowacourse/mission-utils";
import { LOTTO_PRICE } from "./Constants.js";
import { INPUT_MONEY_MESSAGE } from "./Constants.js";
import { INPUT_MONEY_ERROR_MESSAGE } from "./Constants.js";
import { CREATE_LOTTO_MESSAGE } from "./Constants.js";
import { MIN } from "./Constants.js";
import { MAX } from "./Constants.js";
import { PICK_NUMBER } from "./Constants.js";
import { THREE, FOUR, FIVE, SIX } from "./Constants.js";
import Match from "./Match.js";

class User {
  constructor() {
    this.users = [];
  }

  async inputMoney() {
    await MissionUtils.Console.print(INPUT_MONEY_MESSAGE);
    const INPUT_MONEY = await MissionUtils.Console.readLineAsync("");
    return Number(INPUT_MONEY);
  }

  validate(MONEY) {
    if (MONEY % LOTTO_PRICE !== 0) {
      throw new Error(INPUT_MONEY_ERROR_MESSAGE);
    }

    if (MONEY <= 0) {
      throw new Error(INPUT_MONEY_ERROR_MESSAGE);
    }
  }

  async calculateCount(money) {
    const COUNT = money / LOTTO_PRICE;
    await MissionUtils.Console.print("\n" + COUNT + CREATE_LOTTO_MESSAGE);

    return COUNT;
  }

  async createLotto(COUNT) {
    for (let i = 0; i < COUNT; i++) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(
        MIN,
        MAX,
        PICK_NUMBER
      );
      lotto.sort((a, b) => a - b);
      this.printLotto(lotto);
      const MATCH = new Match(lotto);
      this.users.push(MATCH);
    }
  }

  async printLotto(lotto) {
    await MissionUtils.Console.print(
      "[" + lotto.join("," + " ").toString() + "]"
    );
  }

  matching(CORRECT, BONUS) {
    const STATS = {
      MATCH_THREE: 0,
      MATCH_FOUR: 0,
      MATCH_FIVE: 0,
      MATCH_BONUS: 0,
      MATCH_ALL: 0,
    };

    this.users.forEach((numbers) => {
      const MATCH = new Match();
      const RESULT = MATCH.matching(CORRECT, numbers.number, BONUS);

      switch (RESULT[0]) {
        case THREE:
          STATS.MATCH_THREE++;
          break;
        case FOUR:
          STATS.MATCH_FOUR++;
          break;
        case FIVE:
          if (RESULT[1] === false) {
            STATS.MATCH_FIVE++;
          } else if (RESULT[1] === true) {
            STATS.MATCH_BONUS++;
          }
          break;
        case SIX:
          STATS.MATCH_ALL++;
          break;
      }
    });

    return STATS;
  }

  async play() {
    let test = "fail";
    let MONEY = 0;

    while (test === "fail") {
      MONEY = await this.inputMoney();
      try {
        this.validate(MONEY);
        test = "success";
      } catch (error) {
        MissionUtils.Console.print(INPUT_MONEY_ERROR_MESSAGE);
      }
    }

    const COUNT = await this.calculateCount(MONEY);
    this.createLotto(COUNT);

    return MONEY;
  }
}

export default User;
