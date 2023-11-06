import { MissionUtils } from '@woowacourse/mission-utils';

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

  get numbers() {
    return this.#numbers;
  }
}

class LottoMachine {
  #bonusNumber;

  generateLotto() {
    const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(number);
  }
  bonusGenerateLotto() {
    this.bonusNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 1)[0];
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default Lotto;
