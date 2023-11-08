import { GAME_PRIZES, NUMBER, PRIZE_AMOUNTS } from '../utils/Constans';
import { ERROR_MESSAGES } from '../utils/Messages';
import { isBonusNumberIncluded } from '../utils/Validation';

class LottoMatcher {
  constructor(tickets, winningNumbers, bonusNumber, ticketPrice) {
    this.tickets = tickets;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.ticketPrice = ticketPrice;
    this.#validationBonusNumber(winningNumbers, bonusNumber)
  }

  countMatches() {
    const result = this.#initializeResult();

    this.tickets.forEach((ticket) => {
      this.#updateResult(result, ticket);
    });

    return result;
  }

  #validationBonusNumber(winningNumbers, bonusNumber) {
    if(isBonusNumberIncluded(winningNumbers, bonusNumber)){
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_INCLUDED);
    }
  }

  #includesBonusNumber(ticket, bonusNumber) {
    return ticket.includes(bonusNumber);
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
    }
    if (matchedCount === NUMBER.FIVE && this.#includesBonusNumber(ticket, this.bonusNumber)) {
      this.#updateSecondPrize(result);
    }
    if (matchedCount === NUMBER.FIVE && !this.#includesBonusNumber(ticket, this.bonusNumber)) {
      this.#updateThirdPrize(result);
    }
    if (matchedCount === NUMBER.FOUR) {
      this.#updateFourthPrize(result);
    }
    if (matchedCount === NUMBER.THREE) {
      this.#updateFifthPrize(result);
    }
  }

  #getMatchedNumbers(ticket, winningNumbers) {
    return ticket.filter((number) => winningNumbers.includes(number));
  }

  #updateFirstPrize(result) {
    result[GAME_PRIZES.FIRST_PRIZE]+= 1;
    result.totalEarnings += PRIZE_AMOUNTS.FIRST_PRIZE_AMOUNT;
  }

  #updateSecondPrize(result) {
    result[GAME_PRIZES.SECOND_PRIZE]+= 1;
    result.totalEarnings += PRIZE_AMOUNTS.SECOND_PRIZE_AMOUNT;
  }

  #updateThirdPrize(result) {
    result[GAME_PRIZES.THIRD_PRIZE]+= 1;
    result.totalEarnings += PRIZE_AMOUNTS.THIRD_PRIZE_AMOUNT;
  }

  #updateFourthPrize(result) {
    result[GAME_PRIZES.FOURTH_PRIZE]+= 1;
    result.totalEarnings += PRIZE_AMOUNTS.FOURTH_PRIZE_AMOUNT;
  }

  #updateFifthPrize(result) {
    result[GAME_PRIZES.FIFTH_PRIZE]+= 1;
    result.totalEarnings += PRIZE_AMOUNTS.FIFTH_PRIZE_AMOUNT;
  }
}

export default LottoMatcher;
