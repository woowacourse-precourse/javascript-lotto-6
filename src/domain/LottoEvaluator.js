import { PRINT, PRIZE } from "../const/Messages";

class LottoEvaluator {
  constructor(baseNumbers, bonusNumber) {
    this.baseNumbers = baseNumbers;
    this.bonusNumber = bonusNumber;
    this.matchCounts = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };
  }

  evaluateTicket(ticket) {
    let matchCount = ticket.filter((number) => this.baseNumbers.includes(number)).length;
    let isBonusMatched = ticket.includes(this.bonusNumber);

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
    return (
      `${PRIZE.FIFTH} ${this.matchCounts.FIFTH}${PRINT.COUNT}` +
      `${PRIZE.FOURTH} ${this.matchCounts.FOURTH}${PRINT.COUNT}` +
      `${PRIZE.THIRD} ${this.matchCounts.THIRD}${PRINT.COUNT}` +
      `${PRIZE.SECOND} ${this.matchCounts.SECOND}${PRINT.COUNT}` +
      `${PRIZE.FIRST} ${this.matchCounts.FIRST}${PRINT.COUNT}`
    );
  }

  evaluateTickets(userTickets) {
    userTickets.forEach((ticket) => this.evaluateTicket(ticket));
    return this.getResults();
  }
}

export default LottoEvaluator;
