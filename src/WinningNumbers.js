import { checkValue } from './libs/checkValue';
import { WINNING_NUMBER } from './libs/constants';
import { throwError } from './libs/throwError';

class WinningNumbers {
  constructor(numbers) {
    this.validate(numbers);
    this.value = numbers;
  }

  validate(numbers) {
    const { errorMessage } = checkValue.numbers(numbers, WINNING_NUMBER);

    if (errorMessage) {
      throwError(errorMessage);
    }
  }
}

export default WinningNumbers;
