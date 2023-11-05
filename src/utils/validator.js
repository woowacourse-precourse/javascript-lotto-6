import { printErrorMessage, printMessage } from './printMessage.js';
import MESSAGES from '../constants/messages.js';
import NUMBERS from '../constants/numbers.js';

export const isValidPerchaseAmount = perchaseAmount => {
  if (perchaseAmount % 1000) {
    printErrorMessage(
      `${MESSAGES.errorHeader}${MESSAGES.nonThousandUnitMessage}`,
    );
    return;
  }
  if (perchaseAmount > 20000) {
    printErrorMessage(`${MESSAGES.errorHeader}${MESSAGES.inputLimitMessage}`);
    return;
  }
  if (!perchaseAmount.length) {
    printErrorMessage(
      `${MESSAGES.errorHeader}${MESSAGES.emptyPurchaseAmountInput}`,
    );
  }
};

export const isValidLottoNumber = userLottoNumberInput => {
  if (userLottoNumberInput.length > 6 || userLottoNumberInput.length === 0) {
    printErrorMessage(`${MESSAGES.errorHeader}${MESSAGES.invalidLength}`);
  }

  const numberRange = number =>
    number >= NUMBERS.minLottoNumber && number <= NUMBERS.maxLottoNumber;

  if (!userLottoNumberInput.some(numberRange)) {
    printErrorMessage(`${MESSAGES.errorHeader}${MESSAGES.invalidRange}`);
  }

  const deleteDuplication = new Set(userLottoNumberInput);
  if (userLottoNumberInput.length !== deleteDuplication.length) {
    printErrorMessage(`${MESSAGES.errorHeader}${MESSAGES.duplicatedNumber}`);
  }
};
