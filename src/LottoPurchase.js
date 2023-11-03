import { Console, Random } from "@woowacourse/mission-utils";

export default class LottoPurchase {
  #lottos;

  UNIT_MONEY = 1000;

  async buy() {
    const money = await Console.readLineAsync("구입금액을 입력해 주세요.");
    this.#validateMoeny(money);
    const count = money / this.UNIT_MONEY;
    this.#lottos = [...Array(count).keys()].map(() =>
      Random.pickUniqueNumbersInRange(1, 45, 6)
    );
  }

  getLottos() {
    return this.#lottos;
  }

  #validateMoeny(money) {
    if (money % this.UNIT_MONEY !== 0)
      throw new Error("[ERROR] 구매금액은 1,000원 단위로만 입력 가능합니다.");
  }
}
