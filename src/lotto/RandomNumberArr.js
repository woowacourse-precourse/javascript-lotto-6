import { MissionUtils } from '@woowacourse/mission-utils';
import { magicNumber } from '../constants/index.js';
import { printMethod } from '../utils/ui-method.js';

export default class RandomNumber {
  #randomNumber;

  constructor(cnt) {
    this.#randomNumber = this.#createRandomNumber(cnt);
  }

  // 랜덤 숫자들을 화면에 출력하는 메서드
  printRandomNumber() {
    this.#randomNumber.forEach((numbers, idx) => {
      const numberStr = this.#makeArrStr(numbers);
      printMethod(numberStr);
      if (idx === this.#randomNumber.length - 1) printMethod('\n');
    });
  }

  // 배열의 형태가 아닌, 문자열의 형태로 출력하게 바꾸는 메서드
  #makeArrStr(arr) {
    const tmpArr = arr.slice();
    let tmpStr = '';
    tmpStr += '[';
    tmpArr.forEach((str) => {
      tmpStr += `${str}, `;
    });
    tmpStr = tmpStr.replace(/,.$/, ']');
    return tmpStr;
  }

  #createNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      magicNumber.START_RANGE,
      magicNumber.END_RANGE,
      magicNumber.RANDOM_NUMBER_CNT,
    );
    return numbers.sort((a, b) => a - b);
  }

  #createRandomNumber(cnt) {
    const randomNumber = [];
    let numbers = [];
    for (let idx = 0; idx < cnt; idx += 1) {
      numbers = this.#createNumbers();
      randomNumber.push(numbers);
    }
    return randomNumber;
  }

  getRandomNumber() {
    return this.#randomNumber;
  }
}
