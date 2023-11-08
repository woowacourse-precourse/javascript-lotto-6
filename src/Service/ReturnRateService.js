import { REWARDSET } from '../Constant/SETTING.js';

export default class ReturnMoneyService {
  #myLotto;

  #myWallet;

  constructor(myLotto, mywallet) {
    this.#myLotto = myLotto;
    this.#myWallet = mywallet;
  }

  calculateWinMoney() {
    let returnMoney = 0;

    Object.keys(REWARDSET).forEach((rank, i) => {
      returnMoney += Number(REWARDSET[rank].money) * this.myLotto.getWinResultArr()[i];
    });

    return returnMoney;
  }
}
