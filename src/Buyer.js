import { Console } from "@woowacourse/mission-utils";

class Buyer {
  #purchaseMoney;
  #lottos;

  getPurchaseMoney() {
    return this.#purchaseMoney;
  }

  getLottos() {
    return this.#lottos;
  }

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  async inputMoney() {
    try {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      this.vaildateMoney(input);

      this.#purchaseMoney = Number(input);
    } catch (error) {
      Console.print(error.message);

      return this.inputMoney();
    }

    return this.#purchaseMoney;
  }

  vaildateMoney(input) {
    if (isNaN(input)) throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    if (input < 1000) throw new Error("[ERROR] 최소 구입금액은 1,000원입니다.");
    if (input % 1000 !== 0)
      throw new Error("[ERROR] 1,000원 단위로 입력해 주세요.");
  }
}

export default Buyer;
