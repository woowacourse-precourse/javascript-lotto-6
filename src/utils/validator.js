import { ERROR_MESSAGE } from './constant';

export const Validator = {
  Money_Divisible: (amount) => {
    const parseAmount = parseInt(amount);
    if (parseAmount % 1000 != 0) {
      throw ERROR_MESSAGE.NOT_1000_MULTIPLES;
    }
  },

  Is_Number: (number) => {
    if (number.match(/\D/)) {
      throw ERROR_MESSAGE.IS_NOT_NUMBER;
    }
  },
};
