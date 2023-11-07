import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO, MESSAGE } from "./utils/Constants.js";

class LottoSeller {
  constructor() {
    this.money = null;
    this.lottoTickets = null;
  }

  async buyLotto() {
    await this.getValidMoney();
    this.lottoTickets = (await this.money) / LOTTO.PRICE;
    this.#printTicketsNumber(this.lottoTickets);
  }

  async getValidMoney() {
    const moneyInput = await MissionUtils.Console.readLineAsync(
      MESSAGE.INPUT.MONEY,
    );
    if (this.#validate(moneyInput)) return (this.money = moneyInput);
    return await this.getValidMoney();
  }

  #validate(moneyInput) {
    if (isNaN(moneyInput) || moneyInput % LOTTO.PRICE !== 0) {
      MissionUtils.Console.print(MESSAGE.ERROR.NO_VALID_MONEY);
      return false;
    }
    if (!moneyInput || moneyInput === "0") {
      MissionUtils.Console.print(MESSAGE.ERROR.NO_VALID_MONEY);
      return false;
    }
    return true;
  }

  #printTicketsNumber(lottoTickets) {
    MissionUtils.Console.print(`${lottoTickets}개를 구매했습니다.`);
  }
}

export default LottoSeller;
