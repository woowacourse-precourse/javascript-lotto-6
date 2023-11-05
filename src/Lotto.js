import { Random, Console } from '@woowacourse/mission-utils';
import { NUMBER, TEXT } from './data.js';

export async function lottoAmountGet() {
  const inputAmount = await Console.readLineAsync(TEXT.INPUT_AMOUNT);
}

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

  // TODO: 추가 기능 구현
}

export default Lotto;
