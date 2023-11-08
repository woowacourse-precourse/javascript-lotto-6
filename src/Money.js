import Validation from "./Validation.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Money {
  #money;

  constructor(numbers) {
    this.#money = this.getMoney();
  }

  async getMoney () {
    const input = await MissionUtils.Console.readLineAsync('구매금액을 입력해 주세요.');
    return Validation.checkMoney(input);
  }

}
export default Money;
