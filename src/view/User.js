import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/message.js';
import { validation } from '../utils/validation.js';
import ValidateError from '../error/ValidateError.js';

class User {
  async getLottoPurchasePrice() {
    while (true) {
      try {
        const lottoPurchasePrice = await Console.readLineAsync(INPUT_MESSAGE.lottoPurchasePrice);

        this.#validate(lottoPurchasePrice);

        return Number(lottoPurchasePrice);
      } catch (error) {
        Console.print(error);
      }
    }
  }

  #validate(price) {
    if (validation.isEmpty(price)) {
      throw new ValidateError(ERROR_MESSAGE.empty);
    }

    const numberPrice = Number(price);

    this.#numberValidate(numberPrice);
  }

  #numberValidate(price) {
    if (validation.isNumberZero(price)) {
      throw new ValidateError(ERROR_MESSAGE.notZero);
    }

    if (isNaN(price)) {
      throw new ValidateError(ERROR_MESSAGE.notNumber);
    }

    if (validation.isNotLottoPurchagePriceRange(price)) {
      throw new ValidateError(ERROR_MESSAGE.lottoPurchasePriceRange);
    }
  }
}

export default User;
