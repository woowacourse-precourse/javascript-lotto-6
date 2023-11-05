import Lotto from './Lotto.js';
import { generateUniqueNumbers } from '../utils/GenerateRandomNumberUtils.js';

export default class LottoMachine {
  generateTickets(purchaseAmount) {
    const numberOfTickets = purchaseAmount / 1000;

    const tickets = Array.from({ length: numberOfTickets }, () => {
      const numbers = generateUniqueNumbers(1, 45, 6);
      return new Lotto(numbers);
    });

    return tickets;
  }
}
