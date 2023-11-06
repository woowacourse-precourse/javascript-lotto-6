import { ERROR_MESSAGE } from "./Constants.js";
class Lotto {
  #numbers;
  // #amount;

  constructor(numbers) {
    this.#validate(numbers);
    // this.#validate(amount);
    this.#numbers = numbers;
    // this.#amount = amount;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== numbers.length)
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
  }

  // #validate(amount)

  //validateLottoNumbers(numbers) {
  //  this.#validate(numbers);
  //}
}

export default Lotto;
