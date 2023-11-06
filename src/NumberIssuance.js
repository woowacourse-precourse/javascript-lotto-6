import { Random } from "@woowacourse/mission-utils";

const AMOUNT_UNIT = 1000;
const MIN_RANDOM = 1;
const MAX_RANDOM = 45;
const COUNT_RANDOM = 6;

class NumberIssuance {
  constructor(amount) {
    this.lottoNumbers = [];
    this.numberOfTickets = amount / AMOUNT_UNIT;
    this.#generateNumber();
  }

  #generateNumber() {
    for (let i = 0; i < this.numberOfTickets; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(
        MIN_RANDOM,
        MAX_RANDOM,
        COUNT_RANDOM,
      );
      numbers.sort((a, b) => a - b);
      this.lottoNumbers.push(numbers);
    }
  }
}

export default NumberIssuance;
