import getUserInputAsync from "../View/input.js";
import Validator from "../View/Validator.js";
import INPUT_CONSTANT from "../Constant/InputConstant.js";
import Formattor from "../View/Formattor.js";
import RULE_CONSTANT from "../Constant/RuleConstant.js";
import NUMBER_CONSTANT from "../Constant/NumberConstant.js";

const controllerLottoPurchase = async () => {
  const amountString = await getUserInputAsync(INPUT_CONSTANT.GET_LOTTO_PURCHASE_AMOUNT_MESSAGE);
  Validator.assertNonEmptyString(amountString);
  Validator.assertParsableAsInteger(amountString);
  const parsedAmountNumber = Formattor.formatStringToInteger(amountString);
  Validator.assertPositiveNumber(parsedAmountNumber);
  Validator.assertRemainderNotEqual(
    parsedAmountNumber,
    RULE_CONSTANT.LOTTO_TICKET_PRICE,
    NUMBER_CONSTANT.ZERO
  );
  const getLottoTicketCount = () => (
    Formattor.getDivisionQuotient(parsedAmountNumber, RULE_CONSTANT.LOTTO_TICKET_PRICE)
  )
  return {getLottoTicketCount};
};

const controllerCommonLottoWinningNumbersElements = (lottoCommonWinningNumbersArray) => {
  lottoCommonWinningNumbersArray.forEach((itemString) => {
    Validator.assertNonEmptyString(itemString);
    Validator.assertParsableAsInteger(itemString);
    const itemNumber = Formattor.formatStringToInteger(itemString);
    Validator.assertValueInRange(
      itemNumber,
      RULE_CONSTANT.LOTTO_MIN_NUMBER,
      RULE_CONSTANT.LOTTO_MAX_NUMBER
    );
  });
  const getNumberArray = () => (
    Formattor.formatStringArrayToNumberArray(lottoCommonWinningNumbersArray)
  );
  return {getNumberArray};
}

const controllerCommonLottoWinningNumbers = async () => {
  const lottoCommonWinningNumbersString = (
    await getUserInputAsync(INPUT_CONSTANT.GET_LOTTO_COMMON_WINNING_NUMBERS_MESSAGE)
  );
  const lottoCommonWinningNumbersArray = (
    Formattor.splitStringToArray(lottoCommonWinningNumbersString, RULE_CONSTANT.DELIMITER)
  );
  Validator.assertArraySizeEqual(
    lottoCommonWinningNumbersArray,
    RULE_CONSTANT.COMMON_WINNING_NUMBERS_SIZE
  );
  Validator.assertNotInDuplicateValueInArray(lottoCommonWinningNumbersArray);
  const getlottoCommonWinningNumbersArray = () => (
    controllerCommonLottoWinningNumbersElements(lottoCommonWinningNumbersArray).getNumberArray()
  );
  return {getlottoCommonWinningNumbersArray};
}

const controllerBonusLottoWinningNumber = async () => {
  const lottoBonusWinningNumberString = (
    await getUserInputAsync(INPUT_CONSTANT.GET_LOTTO_BONUS_WINNING_NUMBERS_MESSAGE)
  );
  Validator.assertNonEmptyString(lottoBonusWinningNumberString);
  Validator.assertParsableAsInteger(lottoBonusWinningNumberString);
  const lottoBonusWinningNumber =Formattor.formatStringToInteger(lottoBonusWinningNumberString);
  Validator.assertValueInRange(
    lottoBonusWinningNumber,
    RULE_CONSTANT.LOTTO_MIN_NUMBER,
    RULE_CONSTANT.LOTTO_MAX_NUMBER
  );
  const getlottoBonusWinningNumber = () => lottoBonusWinningNumber;
  return {getlottoBonusWinningNumber};
}

export default {
  controllerLottoPurchase,
  controllerCommonLottoWinningNumbers,
  controllerBonusLottoWinningNumber,
}