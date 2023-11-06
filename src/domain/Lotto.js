import Validation from './Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.validateLottoNumberType(numbers);
    Validation.validateLottoNumberLength(numbers);
    Validation.validateLottoNumberDuplicate(numbers);
    Validation.validateLottoNumberRange(numbers);
  }

  getLottoNumbers() {
    return [...this.#numbers];
  }

  // TODO: 추가 기능 구현

  // createLottoTickets(purchaseAmount) {
  //   for (let ticketCount = 0; ticketCount < purchaseAmount; ticketCount += 1) {
  //     this.lottoTickets.push(this.#createLottoTicket());
  //   }
  // }

  // #createLottoTicket() {
  //   const lottoTicket = Random.pickUniqueNumbersInRange(
  //     CONSTANTS.minRange,
  //     CONSTANTS.maxRange,
  //     6,
  //   ).sort((a, b) => a - b);
  //   return lottoTicket;
  // }

  // printLottoTickets() {
  //   const lottoPurchaseStatus = `${this.lottoTickets.length}${USER_OUTPUT.purchaseCountPrompt}`;
  //   const ticketLines = this.lottoTickets
  //     .map(ticket => `[${ticket.join(', ')}]`)
  //     .join('\n');
  //   Console.print(`${lottoPurchaseStatus}\n${ticketLines}`);
  // }
}

export default Lotto;
