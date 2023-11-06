import { MissionUtils } from "@woowacourse/mission-utils";
const { Random } = MissionUtils;
class BuyLotto {
  #lottoCount;
  #money;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
    this.#lottoCount = money / 1000;
  }

  #validate(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error("[ERROR] 돈은 숫자여야 합니다.");
    }
    if (money < 1000) {
      throw new Error("[ERROR] 돈은 1000원 이상이여야 합니다.");
    }
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 돈은 1000원으로 나누어 떨어져야 합니다.");
    }
    return true;
  }
  get getLottoCount() {
    return this.#lottoCount;
  }
  get getMoney() {
    return this.#money;
  }

  buyOneLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}
const buyLotto = new BuyLotto("3000");
console.log(buyLotto.getLottoCount);
console.log(buyLotto.buyLotto());

export default BuyLotto;
