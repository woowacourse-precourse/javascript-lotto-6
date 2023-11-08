import { Console } from '@woowacourse/mission-utils';
import SYMBOL from '../../constants/symbol.js';

class IssuedLottInfo {
  #count;
  #lottos;

  constructor({ count, lottos }) {
    this.#count = count;
    this.#lottos = lottos;
  }

  #printHeader() {
    return `${this.#count}개를 구매했습니다.`;
  }

  printInfoMessage() {
    Console.print(SYMBOL.blankDivider + this.#printHeader());
    this.#lottos.forEach(lotto => {
      Console.print(lotto);
    });
  }
}

export default IssuedLottInfo;
