import { ERRORMESSAGE } from "./constants/errorMessage";
import LottoNumberDraw from "./functions/LottoNumberDraw";
import Validation from "./utills/validation";


class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers.push(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERRORMESSAGE.LOTTO_NUMBER_LENGTH);
    }

    Validation.validate(numbers);
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
