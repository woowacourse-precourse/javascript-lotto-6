import Validation from './domain/Validation';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.isLottoNumbersValidated(numbers);
    return this;
  }

  getLottoNumbers() {
    return [...this.#numbers];
  }

  #matchCount(ticket) {
    return ticket.filter(number => this.#numbers.includes(number)).length;
  }

  #evaluateEachLottoTicket(ticket, bonusNumber, lottoResult) {
    const updatedResult = { ...lottoResult };
    const matchingNumber = this.#matchCount(ticket);
    const bonusMatch = ticket.includes(bonusNumber);

    if (matchingNumber === 6) updatedResult.first += 1;
    if (matchingNumber === 5 && bonusMatch) updatedResult.second += 1;
    if (matchingNumber === 5 && !bonusMatch) updatedResult.third += 1;
    if (matchingNumber === 4) updatedResult.forth += 1;
    if (matchingNumber === 3) updatedResult.fifth += 1;

    return updatedResult;
  }

  evaluateLottoTickets(lottoTickets, bonusNumber, lottoResult) {
    let evaluatedResult = { ...lottoResult };
    lottoTickets.forEach(ticket => {
      evaluatedResult = this.#evaluateEachLottoTicket(
        ticket,
        bonusNumber,
        evaluatedResult,
      );
    });
    return evaluatedResult;
  }
}

export default Lotto;
