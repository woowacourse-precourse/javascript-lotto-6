import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { InputValidator } from "./utils/InputValidator.js";
import Output from "./Output.js";
import Input from "./Input.js";

class Compare {
  #totalLotto = [];
  #winLotto = [];
  #bonus = 0;
  #sameNum = 0;
  #sameBonus = false;

  constructor(total, win, bonus) {
    this.#totalLotto = total;
    this.#winLotto = win;
    this.#bonus = bonus;
  }

  compareLotto() {
    this.#totalLotto.forEach((num) => {
      this.conpareNum(num);
    });
    Console.print(this.#sameNum);
    Console.print(this.#sameBonus);
  }

  conpareNum(num) {
    if (this.#winLotto.includes(num)) {
      this.#sameNum++;
    }
    if (num == this.#bonus) {
      this.#sameBonus = true;
    }
  }

  getResultObject() {
    return {
      sameNum: this.#sameNum,
      sameBonus: this.#sameBonus,
    };
  }
}

export default Compare;
