import REGEXP from '../constants/RegExp.js';
import { ValanceTypeError } from '../error/Errors.js';

class Validator {
  static isValidValance(input) {
    if(!REGEXP.valance.test(input)) {
      throw new ValanceTypeError(input);
    }
  }
}

export default Validator;
