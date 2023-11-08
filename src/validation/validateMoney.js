import validateMoneyError from '../constants/error';

const regexOnlyNumbers = /^\d+$/;

const validateMoney = (money) => {
  if (!regexOnlyNumbers.test(money)) throw new Error('[ERROR]');

  const moneyToNumber = parseInt(money);

  if (!moneyToNumber) throw new Error('[ERROR]');
  if (moneyToNumber < 1000) throw new Error('[ERROR]');
  if (moneyToNumber % 1000 !== 0) throw new Error('[ERROR]');
};

export default validateMoney;
