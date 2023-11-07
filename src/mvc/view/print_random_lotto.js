import { Console } from '@woowacourse/mission-utils';

class PrintRandomLotto {
  #randomLotto;
  #lottoQuantity;

  constructor(LOTTO_QUANTITY, RANDOM_LOTTO) {
    this.#lottoQuantity = LOTTO_QUANTITY;
    this.#randomLotto = RANDOM_LOTTO;
  }

  printLotto() {
    Console.print('');
    Console.print(`${this.#lottoQuantity}개를 구매했습니다.`);
    this.#randomLotto.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }
}

export default PrintRandomLotto;
