class Validation {
  static isNumber(value, errorMsg) {
    const regEx = /^[1-9]\d*$/;
    if(!value.match(regEx)) throw new Error(errorMsg);
  }

  static isDivisible(num) {
    if(num % 1000 !== 0) throw new Error('[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.');
  }

  static isValidLen(winningArr) {
    if(winningArr.length !== 6) throw new Error('[ERROR] 당첨 번호는 여섯 개를 입력해야 합니다.');
  }

  static isDuplicate(winningArr) {
    if(new Set(winningArr).size !== winningArr.length) throw new Error('[ERROR] 당첨 번호 여섯 개에는 중복이 없어야 합니다.');
  }

  static isValidLottoNum(num) {
    if((num < 1) || (num > 45)) throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자 형식이어야 합니다.');
  }

  static isBonusInWinning(winningNumArr, bonusNum) {
    if(winningNumArr.includes(bonusNum)) throw new Error('[ERROR] 보너스 번호는 당첨 번호에 없는 숫자를 입력해야 합니다.');
  }

  static makeErrorMsg(errorMsg){
    return `[ERROR] ${errorMsg}`;
  }
}

export default Validation;