import LottoGameError from "../Error";
import { LOTTO_ERROR_MSG } from "../constants/error";
import { MONEY_CONSTANT } from "../constants/game";

class Player {
  #seedMoney;
  #reward;
  #lottos;

  constructor(seedMoney) {
    this.#validate(seedMoney);
    this.#seedMoney = seedMoney;

    this.#reward = 0;

    this.#lottos = [];
  }

  #validate(seedMoney) {
    this.#validateDigit(seedMoney);
    if (seedMoney % MONEY_CONSTANT.LOTTO_PRICE !== 0) {
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

  #getBuyableLottos() {}
  #buyLottos() {}

  get playerReward() {
    return this.#reward;
  }

  set playerReward(reward) {
    this.#reward = reward;
  }
}

export default Player;
