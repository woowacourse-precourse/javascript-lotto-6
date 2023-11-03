import LottoValidate from "./validate/LottoValidate.js";
import UserView from './view/UserView.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    new LottoValidate().randomNumberValidate(numbers);
  }

  userOutputPurchaseLotto() {
    new UserView().userOutputPurchaseLottoNumber(this.#numbers);
  }  
}

export default Lotto;
