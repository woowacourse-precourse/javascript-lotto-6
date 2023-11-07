import { Random, Console } from '@woowacourse/mission-utils';
import composeAscending from '../utils/modifiers.js';

export default class LottoDrawing {
  #line;

  #getRandomNumbers;

  #composeAscending;

  #lottos = [];

  constructor(line) {
    this.#line = line;
    this.#getRandomNumbers = () => Random.pickUniqueNumbersInRange(1, 45, 6);
    this.#composeAscending = composeAscending;
  }

  //  로또 구입 수량 체크
  checkCount() {
    return Number(this.#line) / 1000;
  }

  // 수량만큼 발행  //TODO: 오름차순정리 리팩토링
  makeLottos() {
    for (let i = 0; i < this.checkCount(); i += 1) {
      this.#lottos.push(this.#composeAscending(this.#getRandomNumbers()));
    }
    return this.#lottos;
  }
}

const drawing = new LottoDrawing('3000');
Console.print(drawing.makeLottos());
