import { Console, Random } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateNoDuplicates(numbers);
    this.#validateNumberRange(numbers);
    this.#validateAscendingOrder(numbers);
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateNoDuplicates(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호 6개는 중복되지 않아야 합니다.');
    }
  }

  #validateNumberRange(numbers) {
    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  #validateAscendingOrder(numbers) {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== sortedNumbers[i]) {
        throw new Error('[ERROR] 로또 번호는 오름차순 정렬되어야 합니다.');
      }
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

class LottoMachine {
  #lottos = [];
  #lottoCount;

  constructor(money) {
    this.#lottoCount = money / 1000;
    this.#generateLottos();
  }

  #generateLottos() {
    const startInclusive = 1;
    const endInclusive = 45;
    const count = 6;

    for (let i = 0; i < this.#lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        startInclusive,
        endInclusive,
        count,
      );
      numbers.sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      this.#lottos.push(lotto);
    }
  }

  printLottos() {
    Console.print(`${this.#lottoCount}개를 구매했습니다.`);
    for (const lotto of this.#lottos) {
      Console.print(`[${lotto.getNumbers().join(', ')}]`); // 수정된 부분
    }
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoMachine;
