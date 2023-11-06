import { GAME_PRIZES, NUMBER, PRIZE_AMOUNTS } from "../utils/Constans";

class LottoMatcher {
  constructor(tickets, winningNumbers, bonusNumber, ticketPrice) {
    this.tickets = tickets;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.ticketPrice = ticketPrice;
  }

  countMatches() {
    const result = this.#initializeResult();

    this.tickets.forEach((ticket) => {
      this.#updateResult(result, ticket);
    });

    return result;
  }

  #initializeResult() {
    return {
      [GAME_PRIZES.FIRST_PRIZE]: NUMBER.ZERO,
      [GAME_PRIZES.SECOND_PRIZE]: NUMBER.ZERO,
      [GAME_PRIZES.THIRD_PRIZE]: NUMBER.ZERO,
      [GAME_PRIZES.FOURTH_PRIZE]: NUMBER.ZERO,
      [GAME_PRIZES.FIFTH_PRIZE]: NUMBER.ZERO,
      totalSpent: parseInt(this.ticketPrice),
      totalEarnings: NUMBER.ZERO,
    };
  }

  #updateResult(result, ticket) {
    const matchedNumbers = this.#getMatchedNumbers(ticket, this.winningNumbers);
    const matchedCount = matchedNumbers.length;
    if (matchedCount === NUMBER.SIX) {
      this.#updateFirstPrize(result);
    } else if (matchedCount === NUMBER.FIVE && this.#includesBonusNumber(ticket, this.bonusNumber)) {
      this.#updateSecondPrize(result);
    } else if (matchedCount === NUMBER.FIVE) {
      this.#updateThirdPrize(result);
    } else if (matchedCount === NUMBER.FOUR) {
      this.#updateFourthPrize(result);
    } else if (matchedCount === NUMBER.THREE) {
      this.#updateFifthPrize(result);
    }
  }

  #getMatchedNumbers(ticket, winningNumbers) {
    return ticket.filter((number) => winningNumbers.includes(number));
  }

  #includesBonusNumber(ticket, bonusNumber) {
    return ticket.includes(bonusNumber);
  }

  #updateFirstPrize(result) {
    result[GAME_PRIZES.FIRST_PRIZE]++;
    result.totalEarnings += PRIZE_AMOUNTS.FIRST_PRIZE_AMOUNT;
  }

  #updateSecondPrize(result) {
    result[GAME_PRIZES.SECOND_PRIZE]++;
    result.totalEarnings += PRIZE_AMOUNTS.SECOND_PRIZE_AMOUNT;
  }

  #updateThirdPrize(result) {
    result[GAME_PRIZES.THIRD_PRIZE]++;
    result.totalEarnings += PRIZE_AMOUNTS.THIRD_PRIZE_AMOUNT;
  }

  #updateFourthPrize(result) {
    result[GAME_PRIZES.FOURTH_PRIZE]++;
    result.totalEarnings += PRIZE_AMOUNTS.FOURTH_PRIZE_AMOUNT;
  }

  #updateFifthPrize(result) {
    result[GAME_PRIZES.FIFTH_PRIZE]++;
    result.totalEarnings += PRIZE_AMOUNTS.FIFTH_PRIZE_AMOUNT;
  }
}

export default LottoMatcher;
