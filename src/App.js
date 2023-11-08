import { Console } from "@woowacourse/mission-utils";
import User from "./User.js";
import Computer from "./Computer.js";
import MESSAGE from "./constants.js";
class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  async play() {
    try {
      const lottoAmount = await this.user.buy();
      const lottoTickets = this.computer.generate(lottoAmount);

      Console.print(`\n${lottoAmount}${MESSAGE.SHOW_TICKETS}`);
      lottoTickets.forEach((lotto) => Console.print(lotto));
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
