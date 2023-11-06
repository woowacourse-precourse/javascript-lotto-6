import { MissionUtils } from "@woowacourse/mission-utils";

class Match {
  constructor(number) {
    this.number = number;
    this.match = 0;
    this.bonus = false;
  }

  async matching(CORRECT, numbers, BONUS) {
    numbers.forEach((number) => {
      if (CORRECT.includes(number)) {
        this.match++;
      }
    });

    this.bonusMatching(numbers, BONUS);
  }

  bonusMatching(numbers, BONUS) {
    if (this.match === 5 && numbers.includes(BONUS)) {
      this.bonus = true;
    }
  }
}

export default Match;
