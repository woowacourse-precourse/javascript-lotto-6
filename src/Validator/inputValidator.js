import { ERROR_MESSAGE } from '../Utils/constants';

const InputCheck = {
  checkInputFormat: input => {
    if (input === undefined)
      throw new Error(ERROR_MESSAGE.INVALID_INPUT_FORMAT);
  },

  checkInputType: input => {
    if (Number(input).toString() !== input) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }
  },
};
const InputValidator = {
  purchaseInput: input => {
    InputCheck.checkInputFormat(input);
    InputCheck.checkInputType(input);
  },

  winningNumbers: winningNumbers => {
    InputCheck.checkInputFormat(winningNumbers);
    winningNumbers.split(',').forEach(e => {
      InputCheck.checkInputType(e);
    });
  },

  bonusNumber: bonusNumber => {
    InputCheck.checkInputFormat(bonusNumber);
    InputCheck.checkInputType(bonusNumber);
  },
};

export default InputValidator;
