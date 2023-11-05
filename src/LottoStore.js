import { Message } from './Message.js';
class LottoStore {
  constructor(pricerLotto = 1000) {
    this.pricerLotto = pricerLotto;
  }

  isValidMoney = (money) => {
    if (isNaN(money)) {
      throw new Error(Message.error.NOT_NUMBER);
    }

    if (money % this.pricerLotto !== 0 || money == 0) {
      throw new Error(Message.error.NOT_ONETHOUSAND);
    }
    return true;
  };

  purchaseLotto = (money) => {
    this.isValidMoney(parseInt(money));
    return money / this.pricerLotto;
  };
}

export { LottoStore };
