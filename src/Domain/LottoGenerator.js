import Lotto from '../Lotto';
import getRandomNumber from '../Utils/getRandomNumber';
import { LOTTO_INFO } from '../Utils/constants';
import LottoValidator from '../Validator/lottoValidator';

class LottoGenerator {
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
}
export default LottoGenerator;
