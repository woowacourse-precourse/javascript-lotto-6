import IO from "../Util/IOHandler.js";
import Constants from "../Util/Constants.js";
import Check from "../Util/Check.js";

export default class Capital {
  constructor() {
    this.check = new Check();
  }

  async toSpend() {
    let cash;
    while (true) {
      try {
        cash = await IO.get(Constants.input.askAmount);
        this.check.money(parseInt(cash.trim(), 10));
        break;
      } catch {
        IO.print(Constants.error.money);
      }
    }
    return parseInt(cash, 10);
  }
}
