import { MissionUtils } from "@woowacourse/mission-utils";
const { Random } = MissionUtils;
class BuyLotto {
  #lottoCount;
  #boughtLotto = [];

  constructor(lottoCount) {
    this.#validate(lottoCount);
    this.#lottoCount = lottoCount;
  }

  #validate(lottoCount) {
    if (Number.isNaN(Number(lottoCount))) {
      throw new Error("[ERROR] 입력값은 숫자여야 합니다.");
    }
    return true;
  }
  get getLottoCount() {
    return this.#lottoCount;
  }

  get getBoughtLotto() {
    return this.#boughtLotto;
  }

  buyOneLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  buyLottos() {
    const lotto = [];
    for (let i = 0; i < this.getLottoCount; i++) {
      lotto.push(this.buyOneLotto());
    }
    this.#boughtLotto = lotto;
  }
}

export default BuyLotto;
