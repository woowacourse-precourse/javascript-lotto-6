import { MAGIC_NUMBER, RANK } from '../constants/numbers.js';

class DrawMachine {
  constructor({ tickets, myNumbers, bonusNumber, rank }) {
    this.tickets = tickets;
    this.myNumbers = myNumbers;
    this.bonusNumber = bonusNumber;
    this.rank = rank;
  }

  calculateWinningStats() {
    this.tickets.forEach(ticket => {
      const matchingCount = this.countMatchNumber(ticket);
      if (matchingCount > MAGIC_NUMBER.MIN_RANK_LIMIT) {
        this.checkRank(matchingCount, ticket);
      }
    });
    return this.rank;
  }

  countMatchNumber(ticket) {
    return (
      MAGIC_NUMBER.LOTTO_NUMBER_LENGTH * 2 - this.removeDuplicatedNumber(ticket)
    );
  }

  removeDuplicatedNumber(ticket) {
    return new Set([...ticket, ...this.myNumbers]).size;
  }

  checkRank(matchingCount, ticket) {
    if (matchingCount === MAGIC_NUMBER.BONUS_THRESHOLD_NUMBER) {
      return this.checkBonus(ticket);
    }
    this.rank[RANK[matchingCount]] += 1;
    return null;
  }

  checkBonus(ticket) {
    if (ticket.includes(this.bonusNumber)) {
      this.rank[RANK['5 + 1']] += 1;
      return;
    }
    this.rank[RANK[5]] += 1;
  }
}

export default DrawMachine;
