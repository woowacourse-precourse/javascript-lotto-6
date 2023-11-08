import { ERROR_MSG } from "./constants.js";

class Validation {
  static isNumber(value, errorMsg) {
    const regEx = /^[1-9]\d*$/;
    if(!value.match(regEx)) throw new Error(this.makeErrorMsg(errorMsg));
  }

  static isDivisible(num) {
    if((num !== 0) && (num % 1000 !== 0)) throw new Error(this.makeErrorMsg(ERROR_MSG.AMOUNT_UNIT_ERROR));
  }

  static isValidLen(winningArr) {
    if(winningArr.length !== 6) throw new Error(this.makeErrorMsg(ERROR_MSG.WINNING_COUNT_ERROR));
  }

  static isDuplicate(winningArr) {
    if(new Set(winningArr).size !== winningArr.length) throw new Error(this.makeErrorMsg(ERROR_MSG.WINNING_DUPLICATE_ERROR));
  }

  static isValidLottoNum(num) {
    if((num < 1) || (num > 45)) throw new Error(this.makeErrorMsg(ERROR_MSG.LOTTO_FORMAT_ERROR));
  }

  static isBonusInWinning(winningNumArr, bonusNum) {
    if(winningNumArr.includes(bonusNum)) throw new Error(this.makeErrorMsg(ERROR_MSG.BONUS_NOT_IN_WINNING_ERROR));
  }

  static makeErrorMsg(errorMsg){
    return `[ERROR] ${errorMsg}`;
  }
}

export default Validation;