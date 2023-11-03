import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class Lottos {
  #lottos;

  constructor(input) {
    this.#lottos = [];
    this.validation(input);
    this.createLottos(input);
  }

  validation(input) {
    const issueNum = parseInt(input);

    if (isNaN(input)) {
      throw new Error('[ERROR] 숫자로 입력해주세요');
    }
    if (issueNum % 1000 !== 0) {
      throw new Error('[ERROR] 단위는 1000입니다.');
    }
  }

  createLottos(input) {
    let issueNum = parseInt(input) / 1000;

    while (issueNum) {
      const numbers = this.generateNumbers();
      numbers.sort((a, b) => a - b);
      this.#lottos.push(new Lotto(numbers));
      issueNum -= 1;
    }
  }

  getLottos() {
    return this.#lottos;
  }

  generateNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers;
  }
}

export default Lottos;
