import LottoValidationError from "../Error/LottoValidationError.js";
import ERROR_CONSTANT from "../Constant/ErrorConstant.js";
import DATA_TYPE_CONSTANT from "../Constant/DataTypeConstant.js";

const FormatParseAmountToNumber = (amount) => {
  if (typeof amount !== DATA_TYPE_CONSTANT.STRING)
    throw new LottoValidationError(`${ERROR_CONSTANT.IS_NOT_STRING}`);

  return (Number(amount));
}

export default {
  FormatParseAmountToNumber,
};
