import Input from "../View/input.js";
import ValidatorAmount from "../View/ValidatorAmount.js";
import Formattor from "../View/Formattor.js";

const controllerLottoPurchaseAmount = async () => {
  const amount = await Input.getLottoPurchaseAmount();
  ValidatorAmount.isEmptyString(amount);
  ValidatorAmount.isParsableAsInteger(amount);
  const parsedAmount = Formattor.formatParseAmountToNumber(amount);
  ValidatorAmount.isNegativeAmount(parsedAmount);
  ValidatorAmount.isAmountNotDivisibleByLottoTicketPirce(parsedAmount);
  const getLottoPurchaseAmount = () => Formattor.formatParseAmountToCount(parsedAmount);
  return {
    getLottoPurchaseAmount,
  }
};

export default {
  controllerLottoPurchaseAmount,
}