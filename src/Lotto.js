import { MESSAGE_PRINT } from './constants/Message';
import Validate from './utils/Validate';
import OutputView from './views/OutputView';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortNumbers();
  }

  #validate(numbers) {
    numbers.forEach(number => {
      Validate.isNumber(number);
      Validate.isInteger(number);
      Validate.isPositive(number);
    });
    Validate.isWinningNumbersLength(numbers);
    Validate.isDuplicateWinningNumbers(numbers);
    numbers.map(number => Validate.isNumberInRange(number));
  }

  #sortNumbers() {
    this.#numbers.sort((prev, next) => prev - next);
  }

  printLottoNumbers() {
    return OutputView.printLottoNumbers(this.#numbers.join(MESSAGE_PRINT.NUMBER_SEPARATOR));
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
