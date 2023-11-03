import { MissionUtils } from "@woowacourse/mission-utils";
import {
  LOTTO_NUMBER_COUNT,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
} from "./constants/standard";

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

  async getIssuanceNumbers() {
    for (let i = 0; i < this.#issuanceCount; i += 1) {
      this.#issuanceNumbers.push(await this.#issueRandomNumber());
    }
    return this.#issuanceNumbers;
  }

  printIssuanceNumbers() {
    this.#issuanceNumbers.forEach((issuanceNumber) => {
      MissionUtils.Console.print(issuanceNumber);
    });
  }
}

export default Issuance;
