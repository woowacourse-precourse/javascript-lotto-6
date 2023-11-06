import LottoValidationError from "../Error/LottoValidationError.js"
import ERROR_CONSTANT from "../Constant/ErrorConstant.js"
import RULE_CONSTANT from "../Constant/RuleConstant.js"
import DATATYPECONSTANT from "../Constant/DataTypeConstant.js"

const isEmptyString = (amount) => {
  if (typeof amount !== DATATYPECONSTANT.STRING)
    throw new LottoValidationError(`${ERROR_CONSTANT.IS_NOT_STRING}`);

  if (amount.length === RULE_CONSTANT.NUMBER_ZERO)
    throw new LottoValidationError(ERROR_CONSTANT.EMPTY_STRING);
}

const isParsableAsInteger = (amount) => {
  if (typeof amount !== DATATYPECONSTANT.STRING)
    throw new LottoValidationError(`${ERROR_CONSTANT.IS_NOT_STRING}`);

  if (
    amount.length > RULE_CONSTANT.NUMBER_ONE && !/^[1-9]*$/.test(amount[RULE_CONSTANT.NUMBER_ZERO])
  ) {
    throw new LottoValidationError(`${amount}${ERROR_CONSTANT.UNCONVERTIBLE_STRING}`);
  }
}

const isNegativeAmount = (parsedAmount) => {
  if (typeof parsedAmount !== DATATYPECONSTANT.NUMBER || Number.isNaN(parsedAmount))
    throw new LottoValidationError(`${parsedAmount}${ERROR_CONSTANT.NOT_A_NUMBER}`);

  if (parsedAmount < RULE_CONSTANT.AMOUNT_MIN_NUMBER)
    throw new LottoValidationError(`${parsedAmount}${ERROR_CONSTANT.NEGATIVE_AMOUNT}`);
}

const isAmountNotDivisibleByLottoTicketPirce = (parsedAmount) => {
  if (typeof parsedAmount !== DATATYPECONSTANT.NUMBER || Number.isNaN(parsedAmount))
    throw new LottoValidationError(`${parsedAmount}${ERROR_CONSTANT.NOT_A_NUMBER}`);

  const remainingAmount = parsedAmount % RULE_CONSTANT.LOTTO_TICKET_PRICE;
  if (remainingAmount !== RULE_CONSTANT.REMAINING_BALANCE)
    throw new LottoValidationError(`${ERROR_CONSTANT.LOTTO_REMAINING_BALANCE(remainingAmount)}`);
}

export default {
  isParsableAsInteger,
  isEmptyString,
  isNegativeAmount,
  isAmountNotDivisibleByLottoTicketPirce,
};
