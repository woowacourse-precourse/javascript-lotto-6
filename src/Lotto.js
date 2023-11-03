import { Random } from '@woowacourse/mission-utils';

const MAX_LOTTO_NUMBER = 45;
const MIN_LOTTO_NUMBER = 1;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static generateNumbers() {
    return Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, 6);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}


export default Lotto;
