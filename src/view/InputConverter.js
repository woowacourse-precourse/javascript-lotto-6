// 사용자 입력값의 타입을 변환하는 컨버터

import {Money} from "../domain/Money.js";

export class InputConverter {
  bonusNumber;
  winningNumbers;
  money;

  /**
   *
   * @param {string} input
   * @return Money
   * @description [구매 금액 변환기]
   *
   * 사용자가 입력한 구매 금액을 `number`로 가져옴
   *
   * '5000' -> 5000
   */
  convertToMoney(input) {
    const amount = Number(input);
    return new Money(amount);
  }

  /**
   *
   * @param input
   * @return {number[]}
   * @description - [당첨 번호 변환기]
   *
   * 사용자가 입력한 당첨 번호를 리스트로 가져옴
   *
   */

  convertToWinningNumbers(input) {
    // '1,2,3,4,5,6' -> ['1','2','3','4','5','6']
    const winningNum = (this.winningNumbers = input.split(","));
    // ['1','2','3','4','5','6'] => [1,2,3,4,5,6]
    return winningNum.map(Number);

    //한번에 '1,2,3,4,5,6' -> [1,2,3,4,5,6]하는 방법도 찾아보자!
  }

  /**
   *
   * @param input
   * @return {number}
   * @description [보너스 번호 변환기]
   *
   * 사용자가 입력한 보너스 번호를 변환해서 `number`로 가져옴
   *
   * '4' -> 4
   */
  convertToBonusNumber(input) {
    return (this.bonusNumber = Number(input));
  }
}
