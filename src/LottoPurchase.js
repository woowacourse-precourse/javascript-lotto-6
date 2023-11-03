import { ERROR } from './constants/error';

class LottoPurchase {
  constructor(money) {
    this.money = money;
  }

  divideByThousand = (money) => {
    const moneyDividedBy1000 = this.money % 1000;
    if (moneyDividedBy1000 !== 0) throw new Error(ERROR.devide1000);
  };
}
