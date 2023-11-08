import { MissionUtils, Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    numbers.sort((a, b) => a - b);
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static pickRandomNumber() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return Console.print(numbers);
    }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicate(numbers) {
  const setDuplicateArray = new Set(numbers);
  if(numbers.length !== setDuplicateArray.size) {
    throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
  }
  }
}

export default Lotto;
