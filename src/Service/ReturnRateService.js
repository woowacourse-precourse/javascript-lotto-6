import { REWARDSET } from '../Constant/SETTING.js';

export default class ReturnMoneyService {
  #myLotto;

  #myWallet;

  constructor(myLotto, myWallet) {
    this.#myLotto = myLotto;
    this.#myWallet = myWallet;
  }

  calculateWinMoney() {
    let returnMoney = 0;
    Object.keys(REWARDSET).forEach((rank, i) => {
      returnMoney += parseInt(REWARDSET[rank].money.replace(/,/g, ''), 10) * this.#myLotto.getWinResultArr()[i];
    });

    return this.#myWallet.setReturnMoney(returnMoney);
  }
}
