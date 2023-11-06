import { PRINT, PRIZE } from "../const/Messages.js";

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
    const prizeKeys = Object.keys(this.matchCounts);
    const resultsArray = prizeKeys.map((prizeKey) => {
      return `${PRIZE[prizeKey]} ${this.matchCounts[prizeKey]}${PRINT.COUNT}`;
    });
    return resultsArray.join("\n");
  }

  evaluateTickets(userTickets) {
    userTickets.forEach((ticket) => this.evaluateTicket(ticket));
    return this.getResults();
  }
}

export default LottoEvaluator;
