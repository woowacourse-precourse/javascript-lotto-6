import getUserInputAsync from '../View/Input';
import Output from '../View/Output';
import Validator from '../View/Validator';
import INPUT_CONSTANT from '../Constant/InputConstant';
import Formattor from '../View/Formattor';
import RULE_CONSTANT from '../Constant/RuleConstant';
import NUMBER_CONSTANT from '../Constant/NumberConstant';

const TRUE = true;

const ValidateNoProblemNumber = (amountString) => {
  Validator.assertNonEmptyString(amountString);
  Validator.assertParsableAsInteger(amountString);
  const parsedAmountNumber = Formattor.formatStringToInteger(amountString);
  Validator.assertPositiveNumber(parsedAmountNumber);
  Validator.assertRemainderNotEqual(
    parsedAmountNumber,
    RULE_CONSTANT.LOTTO_TICKET_PRICE,
    NUMBER_CONSTANT.ZERO,
  );
  return (parsedAmountNumber);
};

const controllerLottoPurchase = async () => {
  let parsedAmountNumber = 0;
  while (TRUE) {
    try {
      const amountString = (
        await getUserInputAsync(INPUT_CONSTANT.GET_LOTTO_PURCHASE_AMOUNT_MESSAGE)
      );
      parsedAmountNumber = ValidateNoProblemNumber(amountString);
      break;
    } catch (error) {
      Output.outputString(error.message);
    }
  }
  const getLottoTicketCount = () => (
    Formattor.getDivisionQuotient(parsedAmountNumber, RULE_CONSTANT.LOTTO_TICKET_PRICE)
  );
  return {
    getLottoTicketCount,
  };
};

const controllerCommonLottoWinningNumbersElements = (lottoCommonWinningNumbersArray) => {
  lottoCommonWinningNumbersArray.forEach((itemString) => {
    Validator.assertNonEmptyString(itemString);
    Validator.assertParsableAsInteger(itemString);
    const itemNumber = Formattor.formatStringToInteger(itemString);
    Validator.assertValueInRange(
      itemNumber,
      RULE_CONSTANT.LOTTO_MIN_NUMBER,
      RULE_CONSTANT.LOTTO_MAX_NUMBER,
    );
  });
  const getNumberArray = () => (
    Formattor.formatStringArrayToNumberArray(lottoCommonWinningNumbersArray)
  );
  return {
    getNumberArray,
  };
};

const controllerCommonLottoWinningNumbers = async () => {
  let lottoCommonWinningNumbersArray = [];
  while (TRUE) {
    try {
      lottoCommonWinningNumbersArray = [];
      const lottoCommonWinningNumbersString = (
        await getUserInputAsync(INPUT_CONSTANT.GET_LOTTO_COMMON_WINNING_NUMBERS_MESSAGE)
      );
      lottoCommonWinningNumbersArray = (
        Formattor.splitStringToArray(lottoCommonWinningNumbersString, RULE_CONSTANT.DELIMITER)
      );
      Validator.assertArraySizeEqual(
        lottoCommonWinningNumbersArray,
        RULE_CONSTANT.COMMON_WINNING_NUMBERS_SIZE
      );
      Validator.assertNotInDuplicateValueInArray(lottoCommonWinningNumbersArray);
      break;
    } catch (error) {
      Output.outputString(error.message);
    }
  }
  const getlottoCommonWinningNumbersArray = () => (
    controllerCommonLottoWinningNumbersElements(lottoCommonWinningNumbersArray).getNumberArray()
  );
  return {
    getlottoCommonWinningNumbersArray
  };
};

const controllerBonusLottoWinningNumber = async (array) => {
  let lottoBonusWinningNumber = 0;
  while (TRUE) {
    try {
      const lottoBonusWinningNumberString = (
        await getUserInputAsync(INPUT_CONSTANT.GET_LOTTO_BONUS_WINNING_NUMBERS_MESSAGE)
      );
      Validator.assertNonEmptyString(lottoBonusWinningNumberString);
      Validator.assertParsableAsInteger(lottoBonusWinningNumberString);
      lottoBonusWinningNumber =Formattor.formatStringToInteger(lottoBonusWinningNumberString);
      Validator.assertValueInRange(
        lottoBonusWinningNumber,
        RULE_CONSTANT.LOTTO_MIN_NUMBER,
        RULE_CONSTANT.LOTTO_MAX_NUMBER
      );
      Validator.assertNotInDuplicateInputValueInArray(array, lottoBonusWinningNumber);
      break;
    } catch (error) {
      Output.outputString(error.message);
    }
  }
  const getlottoBonusWinningNumber = () => lottoBonusWinningNumber;
  return {
    getlottoBonusWinningNumber,
  };
};

export default {
  controllerLottoPurchase,
  controllerCommonLottoWinningNumbers,
  controllerBonusLottoWinningNumber,
};
