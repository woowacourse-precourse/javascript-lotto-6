import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./validator/Validator";


// @NOTE - 로또 발행 및 로또 개수 출력
class LottoTickets {
  constructor(money) {
    this.#validate(money)
    this.money = money
    this.boughtTickets = Number(money) / 1000
    this.tickets = []
  }

  #validate(money) {
    this.validator = new Validator();
    const ERROR_MESSAGE = this.validator.isMoneyValid(money);

    if (ERROR_MESSAGE) {
      MissionUtils.Console.print(ERROR_MESSAGE)
      return;
    }
  }
}

export default LottoTickets;