import CONSTANTS from '../../../constants/CONSTANTS.js';

const { BLANK, STRING_TYPE } = CONSTANTS;

class Is {
  static positiveIntegerString(string) {
    if (typeof string !== STRING_TYPE) return false;
    if (string.trim() === BLANK) return false;
    if (Number.isNaN(Number(string))) return false;
    if (Number(string) !== parseInt(string)) return false;
    if (Number(string) <= 0) return false;
    return true;
  }

  static multiplesInPositive(multiplier, multiplicand) {
    if (multiplier <= 0) return false;
    if (multiplier % multiplicand === 0) return true;
    return false;
  }
}
export default Is;
