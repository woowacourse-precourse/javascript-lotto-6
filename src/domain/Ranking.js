import { PRICE_LENGTH } from "../utils/constants.js";

class Ranking {
  #rank = Array.from({ length: PRICE_LENGTH }, () => 0);

  constructor() {}

  #calculateRank(correct_number, hasBonus) {
    if (correct_number === 3) {
      this.#rank[4]++;
    } else if (correct_number === 4) {
      this.#rank[3]++;
    } else if (correct_number === 5) {
      this.#rank[hasBonus ? 1 : 2]++;
    } else if (correct_number === 6) {
      this.#rank[0]++;
    }
  }

  printRank(lotto_list, winning_number, bonus_number) {
    lotto_list.forEach((lotto) => {
      const correct_number = lotto.filter((num) =>
        winning_number.includes(num)
      ).length;
      const hasBonus = lotto.includes(bonus_number);
      this.#calculateRank(correct_number, hasBonus);
    });

    return this.#rank;
  }
}

export default Ranking;
