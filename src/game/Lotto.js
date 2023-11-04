import { Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers, amount) {
    // this.#validate(numbers);
    this.#numbers = numbers;
  }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  //   }
  // }

  #makeLottos(amount) {
    const quantity = amount / 1000;
    const emptyArrays = Array.from({ length: quantity }, () => {
      return Random.pickUniqueNumbersInRange(1, 45, 6);
    });
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
