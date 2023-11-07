import { MissionUtils } from "@woowacourse/mission-utils";

class Bonus {
  #bonus;

  constructor() {
    this.#bonus;
    this.#checkBonus();
  }

  #checkBonus(numbers, pickNumber) {
    let matchWinningNumber = 0;
    pickNumber.forEach((number) => {
      if (numbers.includes(number)) {
        matchWinningNumber++;
      }
    });
    if (matchWinningNumber === 5) {
      bonus = MissionUtils.Random.pickUniqueNumbersInRange(1, 45);
    }
  }
  get bonus() {
    return this.#bonus;
  }
}

export default Bonus;
