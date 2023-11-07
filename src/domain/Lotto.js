import { LOTTO_RANGE } from '../constants/constant';
import { ERR_MESSAGE } from '../constants/message';
import { REGEX_NUM } from '../constants/regex';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateLottoNums(numbers);
    this.#numbers = numbers;
  }

  #isLenSix(numArr){
    const result = numArr.length === LOTTO_RANGE.range;
    if(!result) throw new Error(ERR_MESSAGE.notLenSix);
  }

  #isDuplicated(numArr){
    const result = new Set(numArr).size === numArr.length;
    if(!result) throw new Error(ERR_MESSAGE.notDuplicated);
  }

  #isNumber(num){
    const numToStr = num.toString();
    if(!REGEX_NUM.test(numToStr)) throw new Error(ERR_MESSAGE.notNum);
  }

  #isUnderFourtyFive(num){
    const { start, end } = LOTTO_RANGE;
    const result = num >= start && num <= end;
    if(!result) throw new Error(ERR_MESSAGE.notUnderFourtyFive);
  }

  #isInCludedInLotto(num){
    const result = this.#numbers.indexOf(num) < 0;
    if(!result) throw new Error(ERR_MESSAGE.notDuplicated);
  }

  #validateLottoNums(numArr) {
    this.#isLenSix(numArr);
    this.#isDuplicated(numArr);
    numArr.forEach(num => {
      this.#isNumber(num);
      this.#isUnderFourtyFive(num);
    })
  }

  validateBonusNum(num){
    this.#isNumber(num);
    this.#isUnderFourtyFive(num);
    this.#isInCludedInLotto(num);
  }

  addBonusToNumbers(num){
    this.#numbers.push(num);
  }
}

export default Lotto;