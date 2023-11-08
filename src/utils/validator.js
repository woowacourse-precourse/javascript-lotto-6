import ERROR_MESSAGES from '../constant/errorMessages';
import { MAX_NUMBER, MIN_NUMBER } from '../constant/lottoNumber';

const onError = (subject, type) => {
  throw new Error(ERROR_MESSAGES[subject][type]);
};

const paymentAmountValidator = {
  isntNumber: paymentAmount => {
    if (Number.isNaN(Number(paymentAmount)) || !Number(paymentAmount)) {
      onError('paymentAmount', 'isntNumber');
    }
  },
  isntInteger: paymentAmount => {
    if (!Number.isInteger(Number(paymentAmount))) {
      onError('paymentAmount', 'isntInteger');
    }
  },
  outOfUnit: paymentAmount => {
    if (paymentAmount % 1000 !== 0) {
      onError('paymentAmount', 'outOfUnit');
    }
  },
};

const winningNumbersValidator = {
  length: winningNumbers => {
    if (winningNumbers.length !== 6) onError('winningNumbers', 'length');
  },
  isntNumber: winningNumbers => {
    if (
      winningNumbers.some(
        number => Number.isNaN(Number(number)) || !Number(number)
      )
    ) {
      onError('winningNumbers', 'isntNumber');
    }
  },
  isntInteger: winningNumbers => {
    if (winningNumbers.some(number => !Number.isInteger(Number(number)))) {
      onError('winningNumbers', 'isntInteger');
    }
  },
  outOfRange: winningNumbers => {
    if (
      winningNumbers.some(number => number < MIN_NUMBER || number > MAX_NUMBER)
    ) {
      onError('winningNumbers', 'outOfRange');
    }
  },
  duplicated: winningNumbers => {
    if (
      winningNumbers.some(
        (number, index) => winningNumbers.indexOf(number) !== index
      )
    ) {
      onError('winningNumbers', 'duplicated');
    }
  },
};

const bonusNumberValidator = {
  isntNumber: bonusNumber => {
    if (Number.isNaN(Number(bonusNumber)) || !Number(bonusNumber)) {
      onError('bonusNumber', 'isntNumber');
    }
  },
  isntInteger: bonusNumber => {
    if (!Number.isInteger(Number(bonusNumber))) {
      onError('bonusNumber', 'isntInteger');
    }
  },
  outOfRange: bonusNumber => {
    if (bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER) {
      onError('bonusNumber', 'outOfRange');
    }
  },
  duplicated: (bonusNumber, winningNumbers) => {
    if (winningNumbers.includes(bonusNumber)) {
      onError('bonusNumber', 'duplicated');
    }
  },
};

export {
  paymentAmountValidator,
  winningNumbersValidator,
  bonusNumberValidator,
};
