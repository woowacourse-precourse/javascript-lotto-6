import IO from "../Util/IOHandler.js";
import Constants from "../Util/Constants.js";
import Check from "../Util/Check.js";

export default class Cash {
  constructor() {
    this.Check = new Check();
  }

  async toSpend() {
    let cash = 0;
    while (cash === 0) {
      cash = await this.getValidCash();
    }
    IO.print("");
    return cash;
  }

  async getValidCash() {
    try {
      const cashStr = await IO.get(Constants.input.askAmount);
      const cashInt = parseInt(cashStr.trim(), 10);
      const isChecked = this.Check.money(cashInt);
      if (isChecked) return cashInt;
    } catch (error) {
      IO.print(error.message);
    }
    return 0;
  }
}
