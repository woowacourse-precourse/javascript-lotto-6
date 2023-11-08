import { ERROR_MESSAGE, LOTTO_END, LOTTO_LENGTH, LOTTO_PRICE, LOTTO_START } from '../Constants.js';

class ValidationUtils {

  // 입력을 안하진 않았는지 검증
  static isemptyInput(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE.emptyInput);
    }
  }

  //양의 정수를 입력하지 않았는지 검증
  static isNotPositiveInteger(input) {
    if (input % 1 !== 0 || input < 1) {
      throw new Error(ERROR_MESSAGE.notPositiveInteger);
    }
  }
  
  // 로또 가격으로 나누어 떨어지지 않는지 검증
  static isNotDivisibleLottoPrice(input) {
    if (input % LOTTO_PRICE !== 0) {
      throw new Error(ERROR_MESSAGE.notDivisible);
    }
  }

  // 로또 번호의 범위안에 들어가는지 검증
  static inLottoNumberRange(input) {
    if(input<LOTTO_START || input>LOTTO_END) {
      throw new Error(ERROR_MESSAGE.notLottoRange);
    }
  }

  // 로또 번호의 길이가 맞는지 검증
  static isLottoLength(input) {
    if(input!==LOTTO_LENGTH) {
      throw new Error(ERROR_MESSAGE.notLottoLength);
    }
  }

  // 각 요소들이 중복되지 않는지 검증
  static isUniqueElements(arr) {
    const SET = new Set(arr);
    if(SET.size!==LOTTO_LENGTH){
      throw new Error(ERROR_MESSAGE.notUniqueElements);
    }
  }
}
export default ValidationUtils;
