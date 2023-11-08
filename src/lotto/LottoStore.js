import { Validator } from '../utility/validation.js';
import { print, getAndValidateInput } from '../utility/console.js';
import {
  LOTTO_CONSTANT,
  LIMIT_CONSTANT,
  MESSAGE,
  ERROR_MESSAGE,
  FORMATTER,
} from '../constant/constant.js';

class LottoStore {
  #money = 0;

  #publishCount = 0;

  #validationList = [
    (input) =>
      Validator.isLengthWithinBounds(
        input,
        LIMIT_CONSTANT.minLimit,
        LIMIT_CONSTANT.lengthMaxLimit,
      ),
    Validator.isValidateNumber,
    (input) =>
      Validator.isNumberWithinBounds(
        Number(input),
        LIMIT_CONSTANT.minLimit,
        LIMIT_CONSTANT.numberMaxLimit,
      ),
    this.#isDivisibleBy1000,
  ];

  #isDivisibleBy1000(money) {
    if (money % LOTTO_CONSTANT.minPrice !== 0) {
      throw new Error(ERROR_MESSAGE.wrongMoneyInput);
    }
  }

  async setLottoStore() {
    const moneyInput = await getAndValidateInput(
      MESSAGE.moneyInput,
      this.#validationList,
    );
    this.#money = Number(moneyInput);

    this.#publishCount = this.#money / LOTTO_CONSTANT.minPrice;
    this.#printPublishCount();
  }

  #printPublishCount() {
    print(FORMATTER.publishCountFormatter(this.#publishCount));
  }
}

export default LottoStore;