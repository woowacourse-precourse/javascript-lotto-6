import { EMPTY } from '../../../constants.js';
import { CustomError } from '../../../error/CustomError.js';
export class CommonUserInputValidator {
  isEmpty(input) {
    return input.split('').every((char) => char === EMPTY);
  }

  isIncludedSpace(input) {
    return !this.isEmpty(input) && input.includes(EMPTY);
  }

  validate(input) {
    if (this.isEmpty(input)) {
      throw CustomError.CommonUserInput('입력값이 없습니다.');
    }

    if (this.isIncludedSpace(input)) {
      throw CustomError.CommonUserInput('입력값에 공백이 포함되어 있습니다.');
    }
  }
}

const CommonUserInput = new CommonUserInputValidator();

export { CommonUserInput };
