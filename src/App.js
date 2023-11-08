import { Console } from '@woowacourse/mission-utils';
import Ticket from './Ticket.js';
import { OUTPUT_MESSAGE, LOTTO } from './Constants.js';
import { getValidPurchasePrice, getValidLottoNumber, getValidBonusNumber } from './Validate.js';

function getAmountOfTickets(purchasePrice) {
  return purchasePrice / LOTTO.PRICE;
}

function showAmountOfTickets(amountOfTickets) {
  Console.print(OUTPUT_MESSAGE.BUY_TICKET(amountOfTickets));
}

class App {
  async play() {
    const purchasePrice = await getValidPurchasePrice();
    const amountOfTickets = getAmountOfTickets(purchasePrice);
    showAmountOfTickets(amountOfTickets);

    const ticketArr = [];
    for (let i = 0; i < amountOfTickets; i++) {
      const ticket = new Ticket();
      ticket.generateRandomNumbers();
      ticket.showNumbers();
      ticketArr.push(ticket);
    }
    const winningNumbers = await getValidLottoNumber();
    const bonusNumber = await getValidBonusNumber();

    ticketArr.forEach((ticket) => {
      const [intersection, isBonusNumberMatch] = ticket.compareNumbers(winningNumbers, bonusNumber);
      ticket.updateRank(intersection, isBonusNumberMatch);
    });

    const rankCounts = [0, 0, 0, 0, 0];

    ticketArr.forEach((ticket) => {
      if (ticket.Rank >= 1 && ticket.Rank <= 5) {
        rankCounts[ticket.Rank - 1]++;
      }
    });

    Console.print(OUTPUT_MESSAGE.RESULT(rankCounts));

    const earning =
      LOTTO.EARNING.RANK_5 * rankCounts[4] +
      LOTTO.EARNING.RANK_4 * rankCounts[3] +
      LOTTO.EARNING.RANK_3 * rankCounts[2] +
      LOTTO.EARNING.RANK_2 * rankCounts[1] +
      LOTTO.EARNING.RANK_1 * rankCounts[0];
    const earningRate = Math.round((earning / purchasePrice) * 10000) / 100;

    Console.print(OUTPUT_MESSAGE.EARNING(earningRate));
  }
}

export default App;
