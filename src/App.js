import { getValidPurchasePrice, getValidLottoNumber, getValidBonusNumber } from './Validate.js';
import {
  getAmountOfTickets,
  showAmountOfTickets,
  makeTicketArray,
  checkTicketRank,
} from './GameData.js';
import {
  getRankCounts,
  showResult,
  calcEarning,
  calcEarningRate,
  showEarningRate,
} from './Result.js';

class App {
  async play() {
    const purchasePrice = await getValidPurchasePrice();

    const amountOfTickets = getAmountOfTickets(purchasePrice);
    showAmountOfTickets(amountOfTickets);
    const ticketArr = makeTicketArray(amountOfTickets);

    const winningNumbers = await getValidLottoNumber();
    const bonusNumber = await getValidBonusNumber();

    checkTicketRank(ticketArr, winningNumbers, bonusNumber);

    const rankCounts = getRankCounts(ticketArr);
    showResult(rankCounts);

    const earning = calcEarning(rankCounts);
    const earningRate = calcEarningRate(earning, purchasePrice);

    showEarningRate(earningRate);
  }
}

export default App;
