import { PRINT, PRIZE, PRIZE_MONEY } from "../const/Messages.js";

class LottoEvaluator {
  constructor(baseNumbers, bonusNumber) {
    this.baseNumbers = baseNumbers;
    this.bonusNumber = bonusNumber;
    this.matchCounts = {
      FIFTH: 0,
      FOURTH: 0,
      THIRD: 0,
      SECOND: 0,
      FIRST: 0,
    };
  }

  evaluateTicket(ticket) {
    const matchCount = ticket.filter((number) => this.baseNumbers.includes(number)).length;
    const isBonusMatched = ticket.includes(this.bonusNumber);

    switch (matchCount) {
      case 6:
        this.matchCounts.FIRST += 1;
        break;
      case 5:
        this.matchCounts[isBonusMatched ? "SECOND" : "THIRD"] += 1;
        break;
      case 4:
        this.matchCounts.FOURTH += 1;
        break;
      case 3:
        this.matchCounts.FIFTH += 1;
        break;
    }
  }

  getResults() {
    const results = Object.entries(this.matchCounts).map(([prizeLevel, count]) => {
      const prizeLabel = PRIZE[prizeLevel];
      const countText = count + PRINT.COUNT;
      return `${prizeLabel} ${countText}`;
    });
    return results.join("\n");
  }

  evaluateTickets(randomLottos) {
    randomLottos.forEach((ticket) => this.evaluateTicket(ticket));
    return this.getResults();
  }

  calculatePrize() {
    let totalPrize = 0;
    totalPrize += this.matchCounts.FIFTH * PRIZE_MONEY.FIFTH;
    totalPrize += this.matchCounts.FOURTH * PRIZE_MONEY.FOURTH;
    totalPrize += this.matchCounts.THIRD * PRIZE_MONEY.THIRD;
    totalPrize += this.matchCounts.SECOND * PRIZE_MONEY.SECOND;
    totalPrize += this.matchCounts.FIRST * PRIZE_MONEY.FIRST;

    return totalPrize;
  }
}

export default LottoEvaluator;
