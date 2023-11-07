import { ERROR_MESSAGE, LOTTO_END, LOTTO_LENGTH, LOTTO_PRICE, LOTTO_START } from '../Constants.js';

class ValidationUtils {
  // 입력값에 ','가 있는지 검증
  static isNoComma(input) {
    if (!input.includes(',')) {
      throw new Error(ERROR_MESSAGE.noComma);
    }
  }

  // 입력을 안하진 않았는지 검증
  static isemptyInput(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE.emptyInput);
    }
  }

  //양의 정수를 입력하지 않았을 때 에러 발생
  static isNotPositiveInteger(input) {
    if (input % 1 !== 0 || input < 1) {
      throw new Error(ERROR_MESSAGE.notPositiveInteger);
    }
  }
  static isNotDivisible(input) {
    if (input % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.notDivisible);
    }
  }
  static inLottoNumberRange(input) {
    if(input<LOTTO_START || input>LOTTO_END) {
      throw new Error(ERROR_MESSAGE.notLottoRange);
    }
  }
  static isLottoLength(input) {
    if(input!==LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGE.notLottoLength);
    }
  }
  static isUniqueElements(arr) {
    const SET = new Set(arr);
    if(SET.size!==LOTTO_LENGTH){
      throw new Error(ERROR_MESSAGE.notUniqueElements);
    }
  }
}
export default ValidationUtils;
