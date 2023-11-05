import validateMoneyError from '../constants/error';

const validateMoney = (money) => {
  const moneyToNumber = parseInt(money);

  if (!moneyToNumber) throw new Error('[ERROR]');

  if (Number.isNaN(moneyToNumber)) throw new Error('[ERROR]');

  if (moneyToNumber < 1000) throw new Error('[ERROR]');

  if (moneyToNumber % 1000 !== 0) throw new Error('[ERROR]');
};

export default validateMoney;
