import {
  CONFIG,
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  PRINT_MESSAGE,
} from '../constants/constants';
import { Console } from '@woowacourse/mission-utils';

class Player {
  /*
   * returns {number} Number(inputPrice) - 구입 금액
   */
  async readPrice() {
    const inputPrice = await Console.readLineAsync(INPUT_MESSAGE.money);
    this.validate(inputPrice);

    Console.print(inputPrice / CONFIG.price + PRINT_MESSAGE.lottoCount);

    return Number(inputPrice);
  }

  /*
   * @param {string} money - 구입 금액
   */
  validate(money) {
    if (Number.isNaN(Number(money))) {
      throw new Error(ERROR_MESSAGE.money.notNumber);
    }

    if (Number(money) % CONFIG.price !== 0) {
      throw new Error(ERROR_MESSAGE.money.notUnit);
    }
  }
}

export default Player;
