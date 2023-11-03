import { MissionUtils } from "@woowacourse/mission-utils";
import Messages from "../messages/Messages.js";
import Constants from "../constants/Constants.js";

class BonusLotto {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  async setNumber(number) {
    this.#validate(number);
    this.#number = number;
  }

  async getNumber() {
    return this.#number;
  }

  async #validate(bonusNumber) {
    const messages = new Messages();
    const constants = new Constants();
    if (numbers.some((num) => this.#checkArange(num))) {
      throw new Error(messages.getErrorMsg("outOfindex"));
    }
    if (typeof bonusNumber !== "number") {
      throw new Error(messages.getErrorMsg("notNumber"));
    }
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error(messages.getErrorMsg("overlap"));
    }
  }

  #checkArange(number) {
    const constants = new Constants();
    return (number) =>
      number < constants.getLottoNumberMin() ||
      number > constants.getLottoNumberMax();
  }
}

export default BonusLotto;
