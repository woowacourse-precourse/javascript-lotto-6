import ERROR_CONSTANT from "../Constant/ErrorConstant.js";

class ValidationError extends Error {
  static name = 'LottoValidationError';

  constructor(message) {
    if (typeof (message) !== "string")
      throw new Error (ERROR_CONSTANT.ERROR_PRIFIX + message);

    super(ERROR_CONSTANT.ERROR_PRIFIX + message);
  };
}

export default ValidationError;
