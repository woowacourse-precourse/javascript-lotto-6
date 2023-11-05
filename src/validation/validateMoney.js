import validateMoneyError from '../constants/error';

const validateMoney = (money) => {
  if (!money) throw new Error('[ERROR]');

  if (Number.isNaN(money)) throw new Error('[ERROR]');

  if (money < 1000) throw new Error('[ERROR]');

  if (money % 1000 !== 0) throw new validateMoneyError();
};

export default validateMoney;
