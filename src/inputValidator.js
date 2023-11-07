import { ERROR_MESSAGE } from './Utils/constants';

const checkInputFormat = (input) => {
  if (input === undefined) throw new Error(ERROR_MESSAGE.INVALID_INPUT_FORMAT);
};

const checkInputType = (input) => {
  if (Number(input).toString() !== input) {
    throw new Error(ERROR_MESSAGE.TYPE_ERROR);
  }
};

const purchaseInput = (input) => {
  checkInputFormat(input);
  checkInputType(input);
};

const winningNumbers = (winningNumbers) => {
  checkInputFormat(winningNumbers);
  winningNumbers.split(',').forEach((e) => {
    checkInputType(e);
  });
};

const bonusNumber = (bonusNumber) => {
  checkInputFormat(bonusNumber);
  checkInputType(bonusNumber);
};

export default {
  purchaseInput,
  winningNumbers,
  bonusNumber,
};
