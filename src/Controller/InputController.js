import getUserInputAsync from "../View/input.js";
import Validator from "../View/Validator.js";
import INPUT_CONSTANT from "../Constant/InputConstant.js";
import Formattor from "../View/Formattor.js";
import RULE_CONSTANT from "../Constant/RuleConstant.js";
import NUMBER_CONSTANT from "../Constant/NumberConstant.js";



const controllerLottoPurchase = async () => {
  const amount = await getUserInputAsync(INPUT_CONSTANT.GET_LOTTO_PURCHASE_AMOUNT_MESSAGE);
  Validator.assertNonEmptyString(amount);
  Validator.assertParsableAsInteger(amount);
  const parsedAmount = Formattor.formatStringToInteger(amount);
  Validator.assertPositiveNumber(parsedAmount);
  Validator.assertRemainderNotEqual(
    parsedAmount,
    RULE_CONSTANT.LOTTO_TICKET_PRICE,
    NUMBER_CONSTANT.ZERO
  );
  const getLottoTicketCount = () => (
    Formattor.getDivisionQuotient(parsedAmount, RULE_CONSTANT.LOTTO_TICKET_PRICE)
  )
  return {
    getLottoTicketCount,
  }
};

export default {
  controllerLottoPurchase,
}
