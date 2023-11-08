import { Console } from "@woowacourse/mission-utils";

class Buyer {
  #purchaseMoney;
  #lottos;

  getPurchaseMoney() {
    return this.#purchaseMoney;
  }
  async inputMoney() {
    try {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

      this.#purchaseMoney = Number(input);
    } catch (error) {
      Console.print(error.message);

      return this.inputMoney();
    }

    return this.#purchaseMoney;
  }
}

export default Buyer;
