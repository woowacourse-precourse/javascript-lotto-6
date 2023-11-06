import { Console } from "@woowacourse/mission-utils";
import { RANKS, GAME_MESSAGES, ERROR_MESSAGES } from "./Constatns.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw ERROR_MESSAGES.LOTTO_RANGE_OVER;
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw ERROR_MESSAGES.DUPLICATION_NUMBER;
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw ERROR_MESSAGES.NUMBER_RANGE_OVER;
      }
    });
  }

  validateBonusNumber(bonusLotto, winLotto) {
    if (!bonusLotto) {
      throw ERROR_MESSAGES.EMPTY_INPUT;
    }

    if (winLotto.includes(Number(bonusLotto))) {
      throw ERROR_MESSAGES.DUPLICATION_NUMBER;
    }

    if (bonusLotto < 1 || bonusLotto > 45) {
      throw ERROR_MESSAGES.NUMBER_RANGE_OVER;
    }
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
      const rank = this.lottoRanksCount(lotto, bonusLotto);
      if (rank) ranksCounts[RANKS.MAX_RANK_LENGTH - rank]++;
    });
    return ranksCounts;
  }

  getProfit(money, lottoRanks) {
    let profit = 0;
    lottoRanks.forEach((rankCount, idx) => {
      profit += rankCount * RANKS.RANK_PRICE[idx];
    });
    profit = (profit * 100) / money;
    return profit;
  }

  printWinStatics(lottoRanks) {
    Console.print(GAME_MESSAGES.WINNING_STATISTICS);
    Console.print(GAME_MESSAGES.NEW_LINE);
    GAME_MESSAGES.WINNING_RESULT.forEach((winMessage, idx) => {
      Console.print(winMessage.replace("%s", lottoRanks[idx]));
    });
  }
}

export default Lotto;
