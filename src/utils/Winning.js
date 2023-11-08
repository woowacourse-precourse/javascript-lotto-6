import { Console } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import Validation from "../libs/Validation.js";
import { MESSAGES } from "../libs/Constant.js";

class Winning {
  constructor() {
    this.number = [];
    this.bonus = 0;
    this.statistics = new Array(5).fill(0);
  }

  async numberInput() {
    const input = await Console.readLineAsync(MESSAGES.LOTTO_WINNING_NUM_INPUT);

    const lotto = new Lotto(input.split(",")).lottoReturn(input.split(","));
    this.number = lotto.map(Number);

    return this.number;
  }

  async tryNumberInput() {
    try {
      await this.numberInput();
    } catch (error) {
      Console.print("[ERROR] : " + error);
      await this.tryNumberInput();
    }
  }

  async bonusNumInput() {
    const input = await Console.readLineAsync(MESSAGES.LOTTO_BONUS_NUM_INPUT);

    const validinput = new Exception().validBonusInput(this.number, input);
    this.bonus = Number(validinput);

    return this.bonus;
  }

  async tryBonusNumInput() {
    try {
      await this.bonusNumInput();
    } catch (error) {
      Console.print(error);
      await this.tryBonusNumInput();
    }
  }

  Compare(input) {
    if (
      input.includes(this.bonus) &&
      input.filter((x) => this.number.includes(x)).length == 5
    ) {
      return 7;
    }

    return input.filter((x) => this.number.includes(x)).length;
  }

  CompareAll(lotto) {
    lotto.forEach((element) => {
      const cnt = this.Compare(element) - 3;

      if (cnt >= 0) {
        this.statistics[cnt]++;
      }
    });

    return this.statistics;
  }
}

export default Winning;
