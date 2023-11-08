import { FIVE } from "./Constants.js";

class Match {
  constructor(number) {
    this.number = number;
    this.match = 0;
    this.bonus = false;
  }

  matching(CORRECT, numbers, BONUS) {
    CORRECT.forEach((numbers, i) => {
      CORRECT[i] = Number(numbers);
    });

    numbers.forEach((number) => {
      if (CORRECT.includes(number)) {
        this.match++;
      }
    });

    this.bonusMatching(numbers, BONUS);
    const RESULT = [this.match, this.bonus];

    return RESULT;
  }

  bonusMatching(numbers, BONUS) {
    if (this.match === FIVE && numbers.includes(BONUS)) {
      this.bonus = true;
    }
  }
}

export default Match;
