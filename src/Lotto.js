/* eslint-disable class-methods-use-this */
import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Input from './input.js';

class Lotto {
  #numbers; // 로또번호 입력값 배열, 여기가 필드

  constructor(numbers) {
    // this.input = new Input();
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#stringToNum(numbers);
    this.#validateWinningNumLength(numbers);
    this.#duplCheckOfWinngNum(numbers);
    this.#validateNumRange(numbers);
  }

  // async run() {
  //  const winningNum = await this.validCheck();
  //  return winningNum;
  // }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현

  //--------------------------------------------------------
  // async validCheck() {
  //  let newWinning;
  //  let valid = true;

  //  while (valid) {
  //    const winning = await this.input.getWinningNum();
  //    newWinning = winning.map(Number);
  //    Console.print(newWinning);
  //    Console.print(typeof newWinning);

  //    try {
  //      Console.print(winning);
  //      Console.print(typeof winning);
  //      if (this.#stringToNum(winning)) throw new Error(`[ERROR] 입력 값은 숫자여야 합니다.`);
  //      if (this.#validateWinningNumLength(newWinning)) throw new Error(`[ERROR] 숫자 6개를 입력해야 합니다.`);
  //      if (this.#validateNumRange(newWinning)) throw new Error(`[ERROR] 숫자 범위는 1~45 사이입니다.`);
  //      if (this.#duplCheckOfWinngNum(newWinning)) throw new Error(`[ERROR] 당첨 번호는 중복될 수 없습니다.`);
  //      valid = false;
  //    } catch (error) {
  //      Console.print(`[ERROR] 올바른 값을 입력해주세요.`);
  //      continue;
  //    }
  //  }
  //  return newWinning;
  // }

  // 입력 값이 숫자인지 유효성도 같이 확인하면서 문자열을 숫자로 변환.
  #stringToNum(winningNum) {
    Console.print(winningNum);
    Console.print(typeof winningNum);
    const numTypeOfWin = winningNum.map(Number);
    if (numTypeOfWin.includes(NaN)) {
      Console.print(`[ERROR] 입력 값은 숫자여야 합니다.`);
      throw new Error(`[ERROR] 입력 값은 숫자여야 합니다.`);
      // const numArray = {
      //  true: true,
      //  num: numTypeOfWin,
      // };
    }
    // Console.print(numTypeOfWin); // 지워야 함
    // return numTypeOfWin;
  }

  // 정답 숫자 길이 유효성 확인
  #validateWinningNumLength(winningNum) {
    Console.print(winningNum);
    Console.print(typeof winningNum);
    const WINNINGNUM_LENGTH = 6;
    if (winningNum.length !== WINNINGNUM_LENGTH) {
      Console.print(`[ERROR] 숫자 6개를 입력해야 합니다.`);
      throw new Error(`[ERROR] 숫자 6개를 입력해야 합니다.`);
    }
  }

  // 정답 숫자 입력 범위 확인, 정답, 보너스 둘 다 사용 가능
  #validateNumRange(inputNum) {
    Console.print(`범위확인 + ${inputNum}`);
    Console.print(typeof inputNum);
    const MIN_NUM = 1;
    const MAX_NUM = 45;
    const checkRange = inputNum.some((number) => number < MIN_NUM || number > MAX_NUM);
    // inputNum.forEach((number) => {
    //  if (number < MIN_NUM || MAX_NUM < number) {
    //    Console.print(`[ERROR] 숫자 범위는 1~45 사이입니다.`);
    //    // throw new Error(`[ERROR] 숫자 범위는 1~45 사이입니다.`);
    //    return true;
    //  }
    // });
    if (checkRange) throw new Error(`[ERROR] 숫자 범위는 1~45 사이입니다.`);
    // if (checkRange) return true;
  }

  // 정답 숫자 중복 확인.
  #duplCheckOfWinngNum(winningNum) {
    Console.print(winningNum);
    Console.print(typeof winningNum);
    const setWinningNum = new Set(winningNum);
    if (winningNum.length !== setWinningNum.size) {
      Console.print(`[ERROR] 당첨 번호는 중복될 수 없습니다.`);
      throw new Error(`[ERROR] 당첨 번호는 중복될 수 없습니다.`);
    }
  }
}

export default Lotto;

// const run = new Lotto();
// run.run();
