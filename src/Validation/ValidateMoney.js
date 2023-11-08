import { MESSAGE } from '../Constants/constant';

const ValidateMoney = (money) => {
  if (money % 1000 !== 0 || money < 1000 || isNaN(money)) {
    throw new Error(MESSAGE.ERROR.MONEY);
  }

  return money / 1000;
};

export default ValidateMoney;
