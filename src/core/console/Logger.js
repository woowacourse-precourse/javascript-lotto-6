//@ts-check

import { Console } from "@woowacourse/mission-utils";
import { WINNING_FIELD_INDEX, WINNING_PRICES } from "../const.js";
import Lotto from "../Lotto.js";

export default class Logger {
  constructor() {}

  /**
   *
   * @param {Lotto[]} lottos
   */
  printLottoNumbers(lottos) {
    const lottoAmount = lottos.length;

    Console.print(`\n${lottoAmount}개를 구매했습니다.`);
    lottos
      .map((lotto) => lotto.getNumbers())
      .map((lotto) => this.#arrayToPrettyString(lotto))
      .forEach((lotto) => {
        Console.print(lotto);
      });
  }

  /**
   *
   * @param {{
   *    three: number;
   *    four: number;
   *    five: number;
   *    bonusFive: number;
   *    six: number;
   * }} board
   * @param {number} returnRate
   */
  printWinningBoard(board, returnRate) {
    Console.print("\n당첨 통계");
    Console.print("---");

    Object.keys(board).forEach((fieldName) => {
      Console.print(this.#getWinningFieldString(fieldName, board[fieldName]));
    });

    Console.print(`총 수익률은 ${this.#roundFrom(2, returnRate)}%입니다.`);
  }

  /**
   *
   * @param {any[]} arr
   * @returns {string}
   */
  #arrayToPrettyString(arr) {
    return `[${arr.join(", ")}]`;
  }

  /**
   *
   * @param {string} fieldName
   */
  #getWinningFieldString(fieldName, amount) {
    const money = this.#integerToMoneyString(WINNING_PRICES[fieldName]);

    if (fieldName === "bonusFive") {
      return `${WINNING_FIELD_INDEX[fieldName]}개 일치, 보너스 볼 일치 (${money}원) - ${amount}개`;
    }

    return `${WINNING_FIELD_INDEX[fieldName]}개 일치 (${money}원) - ${amount}개`;
  }

  /**
   *
   * @param {number} num
   * @returns {string}
   */
  #integerToMoneyString(num) {
    return num.toLocaleString();
  }

  /**
   * @param {number} num
   * @param {number} position
   * @returns {number}
   */
  #roundFrom(position, num) {
    position = Math.floor(position);
    num *= Math.pow(10, position - 1);
    num = Math.round(num);
    num /= Math.pow(10, position - 1);
    return num;
  }
}
