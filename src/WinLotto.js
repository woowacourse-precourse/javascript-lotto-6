import LottoStore from "./LottoStore.js";
import ERROR_MESSAGE from "./Errors.js";

class WinLotto {
  constructor(winningNumbers, bonusNumber, ticketNumbers) {
    this.winningNumbers = winningNumbers.map((num) => parseInt(num, 10));
    this.bonusNumber = parseInt(bonusNumber, 10);
    this.ticketNumbers = ticketNumbers.map((ticket) =>
      ticket.map((num) => parseInt(num, 10))
    );
    this.validateDuplicate(this.winningNumbers, this.bonusNumber);
  }

  validateDuplicate(winningNumbers, bonusNumber) {
    const allNumbers = [...winningNumbers, bonusNumber];
    if (new Set(allNumbers).size !== allNumbers.length) {
      throw new Error(ERROR_MESSAGE.duplicateNumbers);
    }
  }

  compareNumbers() {
    let winningResults = [];

    this.ticketNumbers.forEach((ticket) => {
      let matchCount = ticket.filter((num) =>
        this.winningNumbers.includes(num)
      ).length;
      let bonusMatch = ticket.includes(this.bonusNumber) ? 1 : 0;
      const distinguishBonusBall = matchCount === 5 && bonusMatch === 1;
      if (distinguishBonusBall) {
        winningResults.push("5+1");
      }
      if (!distinguishBonusBall) {
        winningResults.push(matchCount);
      }
    });

    return winningResults;
  }

  static async calculateEarnings(lottoTickets) {
    const prizeMoney = {
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+1": 30000000,
      6: 2000000000,
    };

    const results = await LottoStore.calculateWinningResults(lottoTickets);

    let totalEarnings = 0;
    const countResults = {
      3: 0,
      4: 0,
      5: 0,
      "5+1": 0,
      6: 0,
    };

    results.forEach((result) => {
      if (result === "5+1") {
        countResults["5+1"]++;
        totalEarnings += prizeMoney["5+1"];
      } else if (typeof result === "number" && result >= 3) {
        countResults[result]++;
        totalEarnings += prizeMoney[result];
      }
    });

    return { totalEarnings, countResults };
  }
}

export default WinLotto;
