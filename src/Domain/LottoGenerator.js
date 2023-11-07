import Lotto from "../Lotto";
import getRandomNumber from "../getRandomNumber";
import { LOTTO_INFO } from "../constants";
import LottoValidator from "../lottoValidator";

class LottoGenerator {
  #bonus;

  constructor(purcaseAmount) {
    this.#validate(purcaseAmount);
    this.#generateLotto(purcaseAmount);
  }

  #validate(purcaseAmount) {
    LottoValidator.validatePurchaseAmount(purcaseAmount);
  }

  #generateLotto(purcaseAmount) {
    this.purchasedList = [];
    this.lottos = [];
    const amount = parseInt(purcaseAmount / LOTTO_INFO.PRICE);

    Array.from({ length: amount }).forEach(() => {
      const numbers = getRandomNumber();
      this.lottos.push(new Lotto(numbers));
      this.purchasedList.push(numbers);
    });
  }

  set bonus (bonus) {
    this.#bonus = bonus;
  }

  get bonus () {
    return this.#bonus;
  }
}
export default LottoGenerator;