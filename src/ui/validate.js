import { Money } from '../message/error.js';

export const validateMoney = (money) => {
  if (Number.isNaN(money)) {
    throw new Error(Money.INVALID);
  }
  if (money <= 0) {
    throw new Error(Money.ZERO);
  }
  if (money % 1000 !== 0) {
    throw new Error(Money.THOUSAND);
  }
};
