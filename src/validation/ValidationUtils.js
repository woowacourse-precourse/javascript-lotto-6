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
      throw new Error('[ERROR] 아무것도 입력하지 않았습니다.');
    }
  }

  //양의 정수를 입력하지 않았을 때 에러 발생
  static isNotPositiveInteger(input) {
    if (input % 1 !== 0 || input < 1) {
      throw new Error('[ERROR] 양의 정수를 입력하세요.');
    }
  }
  static isNotDivisible(input) {
    if (input % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1000으로 나누어 떨어져야 합니다.');
    }
  }
  static inLottoNumberRange(input) {
    if(input<=0 || input>45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }
  static isLottoLength(input) {
    if(input!==6) {
      throw new Error('[ERROR] 로또 번호는 6자리여야 합니다.');
    }
  }
  static isUniqueElements(arr) {
    const SET = new Set(arr);
    if(SET.size!==arr.length){
      throw new Error('[ERROR] 로또번호는 서로 달라야합니다.');
    }
  }
}
export default ValidationUtils;
