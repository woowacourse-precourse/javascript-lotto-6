import { Console } from "@woowacourse/mission-utils";
import ERROR_CONSTANT from "../Constant/ErrorConstant.js";
import DATATYPE_CONSTANT from "../Constant/DataTypeConstant.js";
import ValidationError from "../Error/ValidationError.js";

const outputString = (output) => {
  if (typeof output !== DATATYPE_CONSTANT.STRING) {
    throw new ValidationError(ERROR_CONSTANT.IS_NOT_STRING);
  }

  Console.print(output);
}

const outputArray = (output) => {
  if (!Array.isArray(output)) {
    throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
  }

  const message = output.join(', ');
  Console.print(`[${message}]`);
}

export default {
  outputString,
  outputArray,
}