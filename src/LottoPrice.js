import { Console, Random } from "@woowacourse/mission-utils";
import { Validation } from "./Validation.js";
import { LOTTO_RULE, GAME_MESSAGES } from "./Constants.js";
import { CustomError } from "./CustomError.js";
import Lotto from "./Lotto.js";

const LENGTH = LOTTO_RULE.LENGTH;
const { MIN, MAX } = LOTTO_RULE.RANGE;

class LottoPrice {
  #lottoPrice;

  constructor(lottoPrice) {
    this.#validatePrice(lottoPrice);
    this.#lottoPrice = lottoPrice;
  }

  async buyLotto() {
    const paidAmount = await Console.readLineAsync(GAME_MESSAGES.BUY.START);
    const amount = this.#calcLottoAmount(paidAmount);
    Console.print(GAME_MESSAGES.BUY.RESULT(amount));
    return this.#checkLotto(amount);
  }

  #validatePrice(lottoPrice) {
    if (!Validation.isNumber(lottoPrice)) {
      throw new CustomError(GAME_MESSAGES.ERROR.INPUT.NO_NUMBER);
    }
    if (!Validation.isPositive(lottoPrice)) {
      throw new CustomError(GAME_MESSAGES.ERROR.INPUT.NO_POSITIVE);
    }

    if (!Validation.isInteger(lottoPrice)) {
      throw new CustomError(GAME_MESSAGES.ERROR.INPUT.NO_INTEGER);
    }
  }

  #generateLotto() {
    return Random.pickUniqueNumbersInRange(MIN, MAX, LENGTH);
  }
  #calcLottoAmount(paidAmount) {
    return paidAmount / this.#lottoPrice;
  }
  #checkLotto(amount) {
    const lottos = [];
    for (let i = 0; i < amount; i++) {
      const lottoNumber = this.#generateLotto();
      const lotto = new Lotto(lottoNumber);
      lotto.printNumbers();
      lotto.push(lotto);
    }
    return lottos;
  }
}
export default LottoPrice;
