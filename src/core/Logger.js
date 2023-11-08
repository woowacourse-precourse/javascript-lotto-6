import { Console } from "@woowacourse/mission-utils";

export default class Logger {
  constructor() {}

  /**
   *
   * @param {number[][]} lottos
   */
  printLottoNumbers(lottos) {
    const lottoAmount = lottos.length;

    Console.print(`${lottoAmount}개를 구매했습니다.`);
    lottos
      .map((lotto) => lotto.sort())
      .map((lotto) => this.#arrayToPrettyString(lotto))
      .forEach((lotto) => {
        Console.print(lotto);
      });
  }

  /**
   *
   * @param {any[]} arr
   * @returns {string}
   */
  #arrayToPrettyString(arr) {
    return `[${arr.join(", ")}]`;
  }
}
