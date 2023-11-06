import LottoValidationError from "../Error/LottoValidationError.js";
import ERROR_CONSTANT from "../Constant/ErrorConstant.js";
import DATATYPE_CONSTANT from "../Constant/DataTypeConstant.js";
import RULE_CONSTANT from "../Constant/RuleConstant.js";

const formatParseAmountToNumber = (amount) => {
  if (typeof amount !== DATATYPE_CONSTANT.STRING)
    throw new LottoValidationError(`${ERROR_CONSTANT.IS_NOT_STRING}`);

  return (Number(amount));
}

const formatParseAmountToCount = (parsedAmount) => {
  if (typeof parsedAmount !== DATATYPE_CONSTANT.NUMBER || Number.isNaN(parsedAmount))
    throw new LottoValidationError(`${parsedAmount}${ERROR_CONSTANT.NOT_A_NUMBER}`);

  const count = parsedAmount / RULE_CONSTANT.LOTTO_TICKET_PRICE;
  return (count);
}

export default {
  formatParseAmountToNumber,
  formatParseAmountToCount,

};
