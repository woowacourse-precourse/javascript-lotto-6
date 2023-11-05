import LottoTicket from './LottoTicket';
import { generateUniqueNumbers } from '../utils/GenerateRandomNumberUtils.js';

export default class LottoMachine {
  static generateTickets(purchaseAmount) {
    const numberOfTickets = purchaseAmount / 1000;

    const tickets = Array.from({ length: numberOfTickets }, () => {
      const numbers = generateUniqueNumbers(1, 45, 6);
      return new LottoTicket(numbers);
    });

    return tickets;
  }
}
