import { MissionUtils } from "@woowacourse/mission-utils";
const { Random } = MissionUtils;
class BuyLotto {
  #lottoCount;
  #boughtLotto = [];

  constructor(lottoCount) {
    this.#lottoCount = lottoCount;
  }

  get getLottoCount() {
    return this.#lottoCount;
  }

  get getBoughtLotto() {
    return this.#boughtLotto;
  }

  buyOneLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  buyLottos() {
    const lotto = [];
    for (let i = 0; i < this.getLottoCount; i++) {
      lotto.push(this.buyOneLotto());
    }
    this.#boughtLotto = lotto;
  }
}
// const buyLotto = new BuyLotto(1);
// buyLotto.buyLottos();
// console.log(buyLotto.getBoughtLotto);

export default BuyLotto;
