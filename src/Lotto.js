import ErrorMessages from "./common/errorMessages.js";
import printWinningLotto from "./ui/PrintWinningLotto.js";
import validateWinningLotto from "./util/validateWinningLotto.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  async main() {
    return this.print();
  }

  #validate(numbers) {
    if (numbers !== undefined && !validateWinningLotto(numbers))
      throw new Error(`${ErrorMessages.WINNING_LOTTO_ERROR_MESSAGE}`);
  }

  async print() {
    const lottoNumbers = await printWinningLotto();
    this.#numbers = lottoNumbers;
    this.#validate(lottoNumbers);
    return lottoNumbers;
  }
}

export default Lotto;
