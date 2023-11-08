import { errorConstants, magicNumber, uiConstants } from './constants/index.js';
import { printMethod } from './utils/index.js';

export default class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numbersString = numbers.join(',');
    this.#isGoodForm(numbersString); // 숫자 + 콤마 형태인지 확인(길이 확인도 같이).
    const beforeNum = [];
    numbers.forEach((num) => {
      this.#isNotZero(num); // 0이 입력됐는지 체크
      this.#isInRange(num); // 1~45 의 수만 입력됐는지 체크
      this.#isNotSameNum(num, beforeNum); // 중복되는 수가 있는지 체크
      beforeNum.push(num);
    });
  }

  #isGoodForm(numbers) {
    const regExp = /^[0-9]{1,}([,]{1}[0-9]{1,}){5}$/;
    if (!regExp.test(numbers)) throw new Error(errorConstants.WRONG_INPUT);
  }

  #isNotZero(number) {
    if (number === magicNumber.ZERO) throw new Error(errorConstants.NOT_ZERO);
  }

  #isInRange(number) {
    if (number > magicNumber.END_RANGE)
      throw new Error(errorConstants.NOT_IN_RANGE);
  }

  #isNotSameNum(number, beforeNumArr) {
    if (beforeNumArr.includes(number))
      throw new Error(errorConstants.NOT_SAME_NUMBER);
  }

  getLottoNumber() {
    return this.#numbers;
  }

  checkWinningCnt(randomNumbers, bonus) {
    const winningCnt = this.#createArr(randomNumbers.length);
    // 내가 산 로또에서 몇개 당첨됐는지 찾는 메서드
    this.#numbers.forEach((number) => {
      randomNumbers.forEach((randomNumber, idx) => {
        if (randomNumber.includes(number))
          winningCnt[idx] += magicNumber.START_RANGE;
      });
    });
    const winningIdx = this.#findIndex(winningCnt); // 다섯개 숫자 당첨된 배열 index찾기
    const bonusCnt = this.#checkIncludeBonus(winningIdx, randomNumbers, bonus);
    return [winningCnt, bonusCnt];
  }

  // 숫자가 다섯개 당첨됐을 때만, 등록되는 bonus객체 구하는 메서드
  #checkIncludeBonus(winningIdxArr, randomNumbers, bonus) {
    const bonusCnt = this.#createArr(randomNumbers.length);
    winningIdxArr.forEach((winningIdx) => {
      if (randomNumbers[winningIdx].includes(bonus))
        bonusCnt[winningIdx] += magicNumber.START_RANGE;
    });
    return bonusCnt;
  }

  // 다섯개의 숫자 당첨된 index 찾기.
  #findIndex(arr) {
    let idx = magicNumber.MINUS_ONE;
    const idxArr = [];
    while (arr.includes(magicNumber.FIVE, idx + magicNumber.START_RANGE)) {
      idx = arr.indexOf(magicNumber.FIVE, idx + magicNumber.START_RANGE);
      idxArr.push(idx);
    }
    return idxArr;
  }

  #createArr(arrLen) {
    const arr = [];
    for (
      let idx = magicNumber.ZERO;
      idx < arrLen;
      idx += magicNumber.START_RANGE
    ) {
      arr[idx] = magicNumber.ZERO;
    }
    return arr;
  }

  // 로또 당첨 개수와 보너스 숫자 당첨 배열을 가지고 당첨금액을 위한 배열구하는 메서드
  createMoneyArr(winningCnt, bonusCnt) {
    const moneyArr = this.#createArr(magicNumber.EIGHT);
    winningCnt.forEach((cnt, idx) => {
      if (cnt >= magicNumber.THREE) {
        moneyArr[cnt] += magicNumber.START_RANGE;
        if (cnt === magicNumber.FIVE && bonusCnt[idx]) {
          moneyArr[magicNumber.EIGHT + magicNumber.MINUS_ONE] +=
            magicNumber.START_RANGE;
          moneyArr[cnt] += magicNumber.MINUS_ONE;
        }
      }
    });
    return moneyArr;
  }

  // 로또 당첨 개수에 따른 출력
  printWinningMoney(moneyArr) {
    const printArr = [
      [uiConstants.THREE_WINNING, magicNumber.THREE],
      [uiConstants.FOUR_WINNING, magicNumber.FOUR],
      [uiConstants.FIVE_WINNING, magicNumber.FIVE],
      [uiConstants.FIVE_BONUS_WINNING, magicNumber.SEVEN],
      [uiConstants.SIX_WINNING, magicNumber.SIX],
    ];
    this.#printresult(printArr, moneyArr);
  }

  #printresult(printArr, moneyArr) {
    printArr.forEach((arr) => {
      printMethod(
        arr[magicNumber.ZERO] +
          moneyArr[arr[magicNumber.ONE]] +
          uiConstants.CNT,
      );
    });
  }
}
