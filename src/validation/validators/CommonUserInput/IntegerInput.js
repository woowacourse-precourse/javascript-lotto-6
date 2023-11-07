import { CustomError } from '../../../error/CustomError.js';
import { CommonUserInputValidator } from './CommonUserInput.js';

class IntegerInputValidator extends CommonUserInputValidator {
  isNotNumber(input) {
    return Number.isNaN(input);
  }

  validate(input) {
    super.validate(input.toString());
    if (this.isNotNumber(input)) {
      throw CustomError.CommonUserInput('숫자가 아닌 값이 입력되었습니다.');
    }
  }
}

const IntegerInput = new IntegerInputValidator();

export { IntegerInput };
