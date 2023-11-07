import { MissionUtils } from "@woowacourse/mission-utils";
import {
  LOTTO_NUMBER_COUNT,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
} from "./constants/standard.js";
import { MESSAGE_PURCHASING_NUMBER } from "./constants/message.js";

class Issuance {
  #issuanceCount;
  #issuanceNumbers;

  constructor(count) {
    this.#issuanceCount = count;
    this.#issuanceNumbers = [];
  }

  async #issueRandomNumber() {
    return await MissionUtils.Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUMBER,
      MAX_LOTTO_NUMBER,
      LOTTO_NUMBER_COUNT
    );
  }

  async #issueNumbers() {
    for (let i = 0; i < this.#issuanceCount; i += 1) {
      let randomNumbers = await this.#issueRandomNumber();
      randomNumbers.sort((a, b) => a - b);
      this.#issuanceNumbers.push(await randomNumbers);
    }
  }

  async printIssuanceNumbers(parchaseNumber) {
    await this.#issueNumbers();

    MissionUtils.Console.print(`${parchaseNumber}${MESSAGE_PURCHASING_NUMBER}`);
    this.#issuanceNumbers.forEach((issuanceNumber) => {
      MissionUtils.Console.print("[" + issuanceNumber.join(", ") + "]");
    });
  }

  get() {
    return this.#issuanceNumbers;
  }
}

export default Issuance;
