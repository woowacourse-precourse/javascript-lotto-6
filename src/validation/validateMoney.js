import { MONEY_ERROR } from "../errorMessages/errorMessage";

const regexOnlyNumbers = /^\d+$/;

const validateMoney = (money) => {
  if (!regexOnlyNumbers.test(money)) throw new Error(MONEY_ERROR.type);

  const moneyToNumber = parseInt(money);

  if (!moneyToNumber) throw new Error(MONEY_ERROR.none);
  if (moneyToNumber < 1000) throw new Error(MONEY_ERROR.over1000);
  if (moneyToNumber % 1000 !== 0) throw new Error(MONEY_ERROR.divide1000);
};

export default validateMoney;
