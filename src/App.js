import { MissionUtils, Console } from '@woowacourse/mission-utils';
import Ticket from './Ticket.js';

async function getPurchasePrice() {
  const price = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
  const purchasePrice = Number(price);
  return purchasePrice;
}

function getAmountOfTickets(purchasePrice) {
  return purchasePrice / 1000;
}

function showAmountOfTickets(amountOfTickets) {
  Console.print(`${amountOfTickets}개를 구매했습니다.`);
}

class App {
  async play() {
    const purchasePrice = await getPurchasePrice();
    const amountOfTickets = getAmountOfTickets(purchasePrice);
    showAmountOfTickets(amountOfTickets);

    const ticketArr = [];
    for (let i = 0; i < amountOfTickets; i++) {
      const ticket = new Ticket();
      ticket.generateRandomNumbers();
      ticket.showNumbers();
      ticketArr.push(ticket);
    }
  }
}

export default App;
