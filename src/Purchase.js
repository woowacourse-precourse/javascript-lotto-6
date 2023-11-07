import { Console, Random } from '@woowacourse/mission-utils';

class Purchase {
  #amount;
  lottoList = [];

  constructor(amount) {
    this.#validateIsString(amount);
    this.#validateIsDivideThousand(amount);
    this.#amount = amount;
  }

  #validateIsString(amount) {
    if (/[^0-9]/.test(amount)) {
      throw new Error('[ERROR] 로또 구입 금액은 숫자만 입력 가능합니다.');
    }
  }

  #validateIsDivideThousand(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(
        '[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.'
      );
    }
  }

  list() {
    const COUNT = this.#amount / 1000;

    for (let i = 0; i < COUNT; i++) {
      const LOTTO = Random.pickUniqueNumbersInRange(1, 45, 6);
      const SORTED_LOTTO = LOTTO.sort((a, b) => a - b);
      this.lottoList.push(SORTED_LOTTO);
    }

    return this.lottoList;
  }

  ui() {
    Console.print(`\n${this.lottoList.length}개를 구매했습니다.`);
    this.lottoList.forEach((lotto) => {
      const stringLotto = `[${lotto.join(', ')}]`;
      Console.print(stringLotto);
    });
  }
}

export default Purchase;
