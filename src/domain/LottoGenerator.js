import Lotto from "../Lotto";
import getRandomNumber from "../utils/getRandomNumber";
import { LOTTO_INFO } from "../utils/constants";

class LottoGenerator {
  constructor(purcaseAmount) {
    this.#validate(purcaseAmount);
    this.#generateLotto(purcaseAmount);
  }

  #validate(purcaseAmount) {
    //로또 유효성 검사
  }

  #generateLotto(purcaseAmount) {
    this.purchasedList = [];
    this.items = [];
    const amount = parseInt(purcaseAmount / LOTTO_INFO.PRICE);

    Array.from({ length: amount }).forEach(() => {
      const numbers = getRandomNumber();
      this.items.push(new Lotto(numbers));
      this.purchasedList.push(numbers);
    });
  }
}
export default LottoGenerator;