import { Console } from "@woowacourse/mission-utils";
import { RANKS } from "./Constatns.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  makeWinLotto(numbers) {
    Console.print(numbers);
  }

  lottoRanksCount(lottos, bonusLotto) {
    let cnt = 0;
    this.#numbers.forEach((number) => {
      if (lottos.includes(number)) cnt += 1;
    });

    if (cnt === 6) return RANKS.RANK_FIRST;
    if (cnt === 5 && lottos.includes(bonusLotto)) return RANKS.RANK_SECOND;
    if (cnt === 5) return RANKS.RANK_THIRD;
    if (cnt === 4) return RANKS.RANK_FOURTH;
    if (cnt === 3) return RANKS.RANK_FIFTH;
    return 0;
  }

  getLottoRanks(lottos, bonusLotto) {
    let ranksCounts = [0, 0, 0, 0, 0];
    lottos.forEach((lotto) => {
      let rank = this.lottoRanksCount(lotto, bonusLotto);
      if (rank) ranksCounts[RANKS.MAX_RANK_LENGTH - rank]++;
    });
    return ranksCounts;
  }

  getReturnOnInvestment;
}

export default Lotto;
