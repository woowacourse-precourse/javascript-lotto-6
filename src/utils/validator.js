import { printErrorMessage } from './printMessage.js';
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

const isInRange = numbers => {
  const numberRange = number =>
    number >= NUMBERS.minLottoNumber && number <= NUMBERS.maxLottoNumber;

  if (!numbers.some(numberRange)) {
    printErrorMessage(`${MESSAGES.errorHeader}${MESSAGES.invalidRange}`);
  }
};

const isDuplicated = numbers => {
  const deleteDuplication = new Set(numbers);

  if (numbers.length !== deleteDuplication.size) {
    printErrorMessage(`${MESSAGES.errorHeader}${MESSAGES.duplicatedNumber}`);
  }
};

export const isValidLottoNumber = userLottoNumberInput => {
  if (
    userLottoNumberInput.length > NUMBERS.lottoNumberLength
    || userLottoNumberInput.length === 0
  ) {
    printErrorMessage(`${MESSAGES.errorHeader}${MESSAGES.invalidLength}`);
  }
  isInRange(userLottoNumberInput);
  isDuplicated(userLottoNumberInput);
};

export const isValidBouseNumber = (bonusNumber, includedBonusNumber) => {
  isInRange(bonusNumber.split());
  isDuplicated(includedBonusNumber);
};
