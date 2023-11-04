import LottoGameError from "../Error.js";
import { LOTTO_ERROR_MSG } from "../constants/error.js";
import { MONEY_CONSTANT } from "../constants/game.js";
import Lotto from "./Lotto.js";
import { Random } from "@woowacourse/mission-utils";

class Player {
  #money;
  #lottos;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
    this.#lottos = this.#buyLottos();
  }

  #validate(money) {
    this.#validateDigit(money);
    if (money % MONEY_CONSTANT.LOTTO_PRICE !== 0) {
      throw new LottoGameError(LOTTO_ERROR_MSG.DIVIDE_ERR);
    }
  }

  #validateDigit(number) {
    const DIGIT_CHECK = /^[0-9]+$/;

    const isDigit = DIGIT_CHECK.test(number);
    if (!isDigit) {
      throw new LottoGameError(LOTTO_ERROR_MSG.NOT_DIGIT_ERR);
    }
  }

  #getBuyableLottos() {
    return this.#money / MONEY_CONSTANT.LOTTO_PRICE;
  }

  #buyLottos() {
    const lottos = [];
    const lottoQuantity = this.#getBuyableLottos();
    for (let i = 0; i < lottoQuantity; i++) {
      lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
    return lottos;
  }

  get playerLottos() {
    return this.#lottos;
  }
}

export default Player;
