import DongHang from './DongHang.js';
import ERROR_MESSAGE from './constants/error.js';
import { LOTTO_PRICE } from './constants/number.js';
import CustomError from './customs/CustomError.js';
import Input from './utils/Input.js';
import PROMPT from './constants/prompt.js';
import NumberValidator from './validators/NumberValidator.js';

class User {
  #lottos = [];

  async buy() {
    const money = await Input.readIntegerAsync(PROMPT.BUY_COST);

    if (!NumberValidator.isDivisibleBy(money, LOTTO_PRICE)) {
      throw new CustomError(ERROR_MESSAGE.NOT_DIVISIBLE_BY_LOTTO_PRICE);
    }

    this.#lottos = DongHang.issue(money);
  }
}

export default User;
