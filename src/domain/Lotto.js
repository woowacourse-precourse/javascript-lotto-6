import { getUserInput, printPurchasedAmount } from '../util/Utils.js';
import { INPUT_MESSAGES } from '../constant/constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
}

const lotto = new Lotto();
lotto.lottoProcess();

export default Lotto;
