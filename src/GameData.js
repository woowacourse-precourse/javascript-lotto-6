import { OUTPUT_MESSAGE, LOTTO } from './Constants.js';
import Ticket from './Ticket.js';
import { Console } from '@woowacourse/mission-utils';

function getAmountOfTickets(purchasePrice) {
  return purchasePrice / LOTTO.PRICE;
}

function showAmountOfTickets(amountOfTickets) {
  Console.print(OUTPUT_MESSAGE.BUY_TICKET(amountOfTickets));
}

function makeTicketArray(amountOfTickets) {
  const ticketArr = [];
  for (let i = 0; i < amountOfTickets; i++) {
    const ticket = new Ticket();
    ticket.generateRandomNumbers();
    ticket.showNumbers();
    ticketArr.push(ticket);
  }
  return ticketArr;
}

function checkTicketRank(ticketArr, winningNumbers, bonusNumber) {
  ticketArr.forEach((ticket) => {
    const [intersection, isBonusNumberMatch] = ticket.compareNumbers(winningNumbers, bonusNumber);
    ticket.updateRank(intersection, isBonusNumberMatch);
  });
}

export { getAmountOfTickets, showAmountOfTickets, makeTicketArray, checkTicketRank };
