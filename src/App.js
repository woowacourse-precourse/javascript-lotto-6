import { MissionUtils, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Ticket from './Ticket.js';
import { ERROR_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE } from './Constants.js';

async function getPurchasePrice() {
  const price = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.PURCHASE_PRICE);
  const purchasePrice = Number(price);
  return purchasePrice;
}

function validatePurchasePrice(purchasePrice) {
  if (purchasePrice.length < 1) {
    throw new Error(ERROR_MESSAGE.PRICE_INPUT.NOTHING);
  }
  if (isNaN(purchasePrice)) {
    throw new Error(ERROR_MESSAGE.PRICE_INPUT.NOT_A_NUMBER);
  }
  if (purchasePrice % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.PRICE_INPUT.WRONG_UNIT);
  }
}

async function getValidPurchasePrice() {
  while (true) {
    try {
      const purchasePrice = await getPurchasePrice();
      validatePurchasePrice(purchasePrice);
      return purchasePrice;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

function getAmountOfTickets(purchasePrice) {
  return purchasePrice / 1000;
}

function showAmountOfTickets(amountOfTickets) {
  Console.print(OUTPUT_MESSAGE.BUY_TICKET(amountOfTickets));
}

async function getLottoNumbers() {
  const lottoNumbers = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.LOTTO_NUMBERS);
  const lottoNumbersArr = lottoNumbers.split(',').map(Number);
  return lottoNumbersArr;
}

async function getValidLottoNumber() {
  while (true) {
    try {
      const numbers = await getLottoNumbers();
      const lotto = new Lotto(numbers);
      return lotto.Numbers;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

async function getBounusNumber() {
  const bonusNumber = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  return bonusNumber;
}

function validateBonusNumber(bonusnumber) {
  if (bonusnumber.length < 1) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER.NOTHING);
  }
  if (isNaN(bonusnumber)) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER.NOT_A_NUMBER);
  }
}

async function getValidBonusNumber() {
  while (true) {
    try {
      const bonusNumber = await getBounusNumber();
      validateBonusNumber(bonusNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
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
      if (ticket.Rank >= 1 && ticket.rank <= 5) {
        rankCounts[ticket.Rank - 1]++;
      }
    });

    Console.print(OUTPUT_MESSAGE.RESULT(rankCounts));

    const earning =
      5000 * rankCounts[4] +
      50000 * rankCounts[3] +
      1500000 * rankCounts[2] +
      30000000 * rankCounts[1] +
      2000000000 * rankCounts[0];
    const earningRate = Math.round((earning / purchasePrice) * 10000) / 100;

    Console.print(OUTPUT_MESSAGE.EARNING(earningRate));
  }
}

export default App;
