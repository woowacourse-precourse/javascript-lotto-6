import ErrorMessages from "./common/errorMessages.js";
import printWinningLotto from "./ui/PrintWinningLotto.js";
import validateWinningLotto from "./util/validateWinningLotto.js";

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = [];
  }

  async main() {
    return this.print();
  }

  #validate(numbers) {
    if (!validateWinningLotto(numbers))
      throw new Error(`${ErrorMessages.WINNING_LOTTO_ERROR_MESSAGE}`);
  }

  async print() {
    const lottoNumbers = await printWinningLotto();
    this.#validate(lottoNumbers);
    this.#numbers = lottoNumbers;
    return lottoNumbers;
  }
}

export default Lotto;
