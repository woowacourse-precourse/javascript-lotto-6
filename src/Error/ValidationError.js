import ERROR_CONSTANT from '../Constant/ErrorConstant';
import DATATYPE_CONSTANT from '../Constant/DataTypeConstant';

class ValidationError extends Error {
  static name = 'LottoValidationError';

  constructor(message) {
    if (typeof message !== DATATYPE_CONSTANT.STRING) {
      throw new Error(ERROR_CONSTANT.ERROR_PRIFIX + message);
    }

    super(ERROR_CONSTANT.ERROR_PRIFIX + message);
  }
}

export default ValidationError;
