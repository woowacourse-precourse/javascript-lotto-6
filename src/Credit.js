import { Console } from "@woowacourse/mission-utils";
import { ERROR, INPUT } from "./Message.js";

class Purchase {
  constructor() {
    this.credit = 0;
  }

  async getCredit() {
    try {
      const input = await Console.readLineAsync(INPUT.CREDIT);
      this.credit = this.isDividedBy1000(Number(input));
      return this.credit;
    } catch (error) {
      Console.print(error.message);
      return await this.getCredit();
    }
  }

  async getAmountOfLotto(credit) {
    const amountOfLotto = this.credit / 1000;
    return amountOfLotto;
  }

  isDividedBy1000(input) {
    if (isNaN(input)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (input % 1000 !== 0) {
      throw new Error(ERROR.NOT_DIVIDED_BY_1000);
    }
    return input;
  }

  printAmountOfLotto(amount) {
    const amountOfLotto = amount;
    Console.print(`\n${amountOfLotto}개를 구매했습니다.`);
  }
}

export default Purchase;
