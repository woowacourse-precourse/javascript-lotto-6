// 역할을 최대한 분리해보자!
// 클래스 당 역할을 1개씩만 할당할 수 있으면 명확하게 이해할 수 있다고 한다!
import Lotto from "./Lotto.js";
import {RandomNumbersGenerator} from "./RandomNumbersGenerator.js";

/**
 * @description - 랜덤으로 로또를 생성해주는 역할
 */
export class LottoGenerator {
  /**
   * @type {boolean}
   * @description 랜덤으로 로또 자동 생성
   */
  #isRandom;

  /**
   *
   * @param {boolean} isRandom
   * @description - default parameter : isRandom은 인자로 아무것도 주지 않으면 기본 true
   *
   * ex.
   * `new LottoGenerator()`처럼 사용하면
   * `new LottoGenerator(true)`와 같음
   *
   * 테스트할떄 false넣어서 사용하면 됨
   */
  constructor(isRandom = true) {
    this.#isRandom = isRandom;
  }

  /**
   *
   * @return {LottoGenerator}
   */
  static random() {
    return new LottoGenerator(true);
  }

  /**
   *
   * @return {LottoGenerator}
   * @description 랜덤 로또 생성 부분 테스트 시 활용
   */
  static fixed() {
    return new LottoGenerator(false);
  }

  /**
   * @return {Lotto}
   * @description - 랜덤으로 로또 한장 생성
   */
  generate() {
    //랜덤으로 생성한다면
    if (this.#isRandom) {
      const randomNumbers = RandomNumbersGenerator.generate();
      return new Lotto(randomNumbers);
    }
    // 랜덤으로 생성하는 게 아닐 때
    const fixedNum = [1, 2, 3, 4, 5, 6];
    return new Lotto(fixedNum);
  }
}
