import IO from "../Util/IOHandler.js";
import Constants from "../Util/Constants.js";
import Check from "../Util/Check.js";

export default class Cash {
  constructor() {
    this.Check = new Check();
  }

  async toSpend() {
    let cash;
    while (true) {
      try {
        cash = await IO.get(Constants.input.askAmount);
        this.Check.money(parseInt(cash.trim(), 10));
        break;
      } catch (error) {
        IO.print(error);
      }
    }
    return parseInt(cash, 10);
  }
}
