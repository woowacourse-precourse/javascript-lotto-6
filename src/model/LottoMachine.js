import Lotto from './Lotto.js';
import { generateUniqueNumbers } from '../utils/GenerateRandomNumberUtils.js';
import { GAME_SETTINGS } from '../constants/gameSettings.js';

export default class LottoMachine {
  generateTickets(purchaseAmount) {
    const numberOfTickets = purchaseAmount / GAME_SETTINGS.TICKET_PRICE;

    const tickets = Array.from({ length: numberOfTickets }, () => {
      const numbers = generateUniqueNumbers(
        GAME_SETTINGS.MIN_LOTTO_NUMBER,
        GAME_SETTINGS.MAX_LOTTO_NUMBER,
        GAME_SETTINGS.NUMBERS_PER_TICKET,
      );
      return new Lotto(numbers);
    });

    return tickets;
  }
}
