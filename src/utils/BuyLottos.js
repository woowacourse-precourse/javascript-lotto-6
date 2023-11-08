import { Console, Random } from "@woowacourse/mission-utils";
import Validation from "../libs/Validation";
import { MESSAGES, CONSTANTS } from "../libs/Constant";

class BuyLotts {
  constructor() {
    this.lottoEach = 0;
    this.lottoAll = new Array();
  }

  async buyLotto() {
    const money = await Console.readLineAsync(MESSAGES.LOTTO_BUY_INPUT);
    const validmoney = new Exception().validateBuyLotto(money);

    return validmoney;
  }

  async countBuytLotto() {
    this.lottoEach = (await this.buyLotto()) / 1000;
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
    const randomNum = Random.pickUniqueNumbersInRange(
      CONSTANTS.LOTTO_MIN_NUM,
      CONSTANTS.LOTTO_MAX_NUM,
      CONSTANTS.LOTTO_VALID_ETC
    ).sort((a, b) => a - b);

    return randomNum;
  }

  buyLottoEntire() {
    const num = this.lottoEach;

    for (let i = 0; i < num; i++) {
      this.lottoAll.push(this.randomPickNum());
    }
  }
}

export default BuyLotts;
