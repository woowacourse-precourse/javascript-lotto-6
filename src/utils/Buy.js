import {Console, Random} from "@woowacourse/mission-utils";
import Exception from "../Exception.js";

class Buy {
  
  constructor() {
    this.lottoEach = 0;
    this.lottoAll = new Array();
  }

  async buyLotto() {
    const money = await Console.readLineAsync("구입금액을 입력해 주세요. \n");
    const validmoney = new Exception().validateBuyLotto(money);

    return validmoney;
  }

  async countBuytLotto() {
    this.lottoEach = await this.buyLotto() / 1000;
  }

  async tryBuyLotto() {
    try {
      await this.countBuytLotto();
    } catch (error) {
      Console.print("[ERROR] : " + error);
      await this.tryBuyLotto();
    }
  }

  randomPickNum() {
    const randomNum = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    
    return randomNum;
  }

  buyLottoEntire() {
    const num = this.lottoEach;

    for (let i = 0; i < num; i++) {
      this.lottoAll.push(this.randomPickNum());
    }
  }
}

export default Buy;