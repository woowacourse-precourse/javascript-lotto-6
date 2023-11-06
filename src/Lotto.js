import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    // this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size <= 5) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
  }

  async randomLottoGenerate() {
    let result = [];
    for (let i = 0; i < 3; i++) {
      const arr = Random.pickUniqueNumbersInRange(1, 45, 6);
      result.push(arr);
    }
    console.log(result[0]);
  }

  // TODO: 추가 기능 구현
}

const lotto = new Lotto();
lotto.randomLottoGenerate();

export default Lotto;
