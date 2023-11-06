import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constant/Messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.bonusNum;
  }

  #validate(numbers) {
    const duplicate = new Set(numbers);
    const regexr = /[^0-45]/g;
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.RANDOM_NUM_SIX);
    }
    if (duplicate.size != numbers.length)
      throw new Error(ERROR_MESSAGE.RANDOM_NUM_DUPLICATE);

    numbers.map((e) => {
      this.checkNumRange(e);
    });
  }

  checkNumRange(e) {
    if (e <= 0 || 45 < e) throw new Error(ERROR_MESSAGE.NUM_RANGE);
  }

  async inputBonusNum() {
    this.bonusNum = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BONUSNUM);
    this.checkNumRange(this.bonusNum);
    Console.print(this.bonusNum);
  }
  // TODO: 추가 기능 구현

  compare;
}

export default Lotto;
