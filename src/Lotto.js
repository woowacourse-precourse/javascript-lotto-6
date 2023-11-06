/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers; // 로또번호 입력값 배열, 여기가 필드

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (this.#stringToNum(numbers)) throw new Error(`[ERROR] 입력 값은 숫자여야 합니다.`);
    const newWinning = numbers.map(Number);

    if (this.#validateWinningNumLength(newWinning)) throw new Error(`[ERROR] 숫자 6개를 입력해야 합니다.`);
    if (this.#validateNumRange(newWinning)) throw new Error(`[ERROR] 숫자 범위는 1~45 사이입니다.`);
    if (this.#duplCheckOfWinngNum(newWinning)) throw new Error(`[ERROR] 당첨 번호는 중복될 수 없습니다.`);
  }

  // 입력 값이 숫자인지 유효성도 같이 확인하면서 문자열을 숫자로 변환.
  #stringToNum(winningNum) {
    const numTypeOfWin = winningNum.map(Number);

    if (numTypeOfWin.includes(NaN)) {
      Console.print(`[ERROR] 입력 값은 숫자여야 합니다.`);

      return true;
    }
  }

  // 정답 숫자 길이 유효성 확인
  #validateWinningNumLength(winningNum) {
    const WINNINGNUM_LENGTH = 6;

    if (winningNum.length !== WINNINGNUM_LENGTH) {
      Console.print(`[ERROR] 숫자 6개를 입력해야 합니다.`);

      return true;
    }
  }

  // 정답 숫자 입력 범위 확인, 정답, 보너스 둘 다 사용 가능
  #validateNumRange(inputNum) {
    const MIN_NUM = 1;
    const MAX_NUM = 45;
    const checkRange = inputNum.some((number) => number < MIN_NUM || number > MAX_NUM);

    if (checkRange) {
      Console.print(`[ERROR] 숫자 범위는 1~45 사이입니다.`);
      return true;
    }
  }

  // 정답 숫자 중복 확인.
  #duplCheckOfWinngNum(winningNum) {
    const setWinningNum = new Set(winningNum);

    if (winningNum.length !== setWinningNum.size) {
      Console.print(`[ERROR] 당첨 번호는 중복될 수 없습니다.`);

      return true;
    }
  }
}

export default Lotto;
