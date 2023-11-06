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

    if (!Validation.isSafeInteger(numbers)) throw new Error(LOTTO_NUMBER_INTEGER);

    if (!Validation.isInRange(numbers)) throw new Error(LOTTO_NUMBER_RANGE);

    if (!Validation.isDuplicate(numbers)) throw new Error(DUPLICATED_NUMBER);
  }

  getNumber() {
    return this.#numbers;
  }
}

export default Lotto;
