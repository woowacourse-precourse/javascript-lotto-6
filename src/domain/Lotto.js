import { Console } from '@woowacourse/mission-utils';
import { LOTTO_RANGE } from '../constants/constant';
import { ERR_MESSAGE } from '../constants/message';
import { REGEX_NUM } from '../constants/regex';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #isLenSix(numArr){
    Console.print(numArr);
    const result = numArr.length === LOTTO_RANGE.range;
    if(!result) throw new Error(ERR_MESSAGE.notLenSix);
  }

  #isNumber(numArr){
    numArr.forEach(num => {
      if(!REGEX_NUM.test(num)) throw new Error(ERR_MESSAGE.notNum);
    })
  }

  #isDuplicated(numArr){
    const result = new Set(numArr).length === numArr.length;
    if(!result) throw new Error(ERR_MESSAGE.notDuplicated);
  }

  #isUnderFourtyFive(numArr){
    numArr.forEach(num => {
      const result = num >= 1 && num <= 45;
      if(!result) throw new Error(ERR_MESSAGE.notUnderFourtyFive);
    })
  }

  #validate(numArr) {
    this.#isLenSix(numArr);
    this.#isDuplicated(numArr);
    this.#isUnderFourtyFive(numArr); 
  }
}

export default Lotto;
