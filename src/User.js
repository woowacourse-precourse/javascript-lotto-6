import * as MissionUtils from "@woowacourse/mission-utils";
import { LOTTO_PRICE } from "./Constants.js";
import { INPUT_MONEY_MESSAGE } from "./Constants.js";
import { INPUT_MONEY_ERROR_MESSAGE } from "./Constants.js";
import { CREATE_LOTTO_MESSAGE } from "./Constants.js";
import { MIN } from "./Constants.js";
import { MAX } from "./Constants.js";
import { PICK_NUMBER } from "./Constants.js";
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

  validate(money) {
    if (money % LOTTO_PRICE !== 0 || money < 0) {
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
      MissionUtils.Console.print(lotto);
      const MATCH = new Match(lotto);
      this.users.push(MATCH);
    }
  }

  matching(CORRECT, BONUS) {
    this.users.forEach((numbers) => {
      const MATCH = new Match();
      MATCH.matching(CORRECT, numbers.number, BONUS);
    });
  }

  async play() {
    const MONEY = await this.inputMoney();
    this.validate(MONEY);
    const COUNT = await this.calculateCount(MONEY);
    this.createLotto(COUNT);

    return;
  }
}

export default User;
