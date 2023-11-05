export default class LottoTicket {
  constructor(numbers) {
    this.numbers = numbers.sort((a, b) => a - b);
  }
}
