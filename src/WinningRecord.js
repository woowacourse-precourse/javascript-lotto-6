export const WINNING_RANK = {
  first: {
    reward: 2_000_000_000,
    matchingNumberCount: 6,
    hasBonusNumber: false,
  },
  second: {
    reward: 30_000_000,
    matchingNumberCount: 5,
    hasBonusNumber: true,
  },
  third: {
    reward: 1_500_000,
    matchingNumberCount: 5,
    hasBonusNumber: false,
  },
  fourth: {
    reward: 50_000,
    matchingNumberCount: 4,
    hasBonusNumber: false,
  },
  fifth: {
    reward: 5_000,
    matchingNumberCount: 3,
    hasBonusNumber: false,
  },
};

export class WinningRecord {
  #winningNumbers;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getWinningStatistics(tickets) {
    const statistics = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    for (let lotto of tickets) {
      this.#checkWinningResultPerTicket(lotto, statistics);
    }
    return statistics;
  }

  #checkWinningResultPerTicket(lotto, statistics) {
    const matchingNumberCount = lotto.getMatchingNumberCount(
      this.#winningNumbers
    );
    const hasBonusNumber = lotto.hasNumber(this.#bonusNumber);

    for (let rank in WINNING_RANK) {
      if (matchingNumberCount == WINNING_RANK[rank].matchingNumberCount) {
        if (WINNING_RANK[rank].hasBonusNumber == true && hasBonusNumber == false) {
          continue;
        }
        statistics[rank] += 1;
        break;
      }
    }
  }

  getRateOfReturn(tickets, statistics) {
    let totalReward = 0;
    for(let rank in statistics) {
        if(statistics[rank] === 0) {
            continue;
        }
        totalReward += WINNING_RANK[rank].reward * statistics[rank];
    }
    return (totalReward / (tickets.length * 1000)) * 100;
  }
}
