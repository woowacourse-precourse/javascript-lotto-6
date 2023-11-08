import ERROR from '../constants/Error';

function checkMoney(money) {
  if (isNaN(money)) {
    throw new Error(ERROR.MONEY_NUMBER);
  }

  if (money % 1000 !== 0) {
    throw new Error(ERROR.MONEY_UNIT);
  }
}

export default checkMoney;
