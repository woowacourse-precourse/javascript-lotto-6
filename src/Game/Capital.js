import IO from "../Util/IOHandler.js";
import Constants from "../Util/Constants.js";
import Check from "../Util/Check.js";

export default class Capital {
  constructor() {
    this.check = new Check();
  }

  async toSpend() {
    const money = await IO.get(Constants.input.askAmount);
    return parseInt(money.trim(), 10);
  }
}
