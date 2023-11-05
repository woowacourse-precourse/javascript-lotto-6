import { Console, Random } from '@woowacourse/mission-utils';

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
  createLotto() {
    const lottoNumberList = [];
    while (lottoNumberList.length < 6) {
      pick = Random.pickUniqueNumbersInRange(1, 45);
      if (!lottoNumberList.includes(pick)) lottoNumberList.push(pick);
    }
  }
}

export default Lotto;
