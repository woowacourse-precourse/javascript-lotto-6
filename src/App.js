import { MissionUtils, Console } from '@woowacourse/mission-utils';
import Ticket from './Ticket.js';

async function getPurchasePrice() {
  const price = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
  const purchasePrice = Number(price);
  return purchasePrice;
}

function validatePurchasePrice(purchasePrice) {
  if (purchasePrice.length < 1) {
    throw new Error('[ERROR] 금액을 입력하세요.');
  }
  if (isNaN(purchasePrice)) {
    throw new Error('[ERROR] 금액은 숫자만 입력하세요.');
  }
  if (purchasePrice % 1000 !== 0) {
    throw new Error('[ERROR] 금액을 1000원 단위로 입력하세요.');
  }
}

async function getValidPurchasePrice() {
  while (true) {
    try {
      const purchasePrice = await getPurchasePrice();
      validatePurchasePrice(purchasePrice);
      return purchasePrice;
    } catch (error) {
      Console.print('[ERROR]');
    }
  }
}

function getAmountOfTickets(purchasePrice) {
  return purchasePrice / 1000;
}

function showAmountOfTickets(amountOfTickets) {
  Console.print(`${amountOfTickets}개를 구매했습니다.`);
}

async function getLottoNumbers() {
  const lottoNumbers = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
  const lottoNumbersArr = lottoNumbers.split(',').map(Number);
  return lottoNumbersArr;
}

async function getBounusNumber() {
  const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
  return bonusNumber;
}

async function getValidLottoNumber() {
  while (true) {
    try {
      const numbers = await getLottoNumbers();
      const lotto = new Lotto(numbers);
      return lotto.Numbers;
    } catch (error) {
      Console.print('[ERROR]');
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
    const bonusNumber = await getBounusNumber();

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

    Console.print(`3개 일치 (5,000원) - ${rankCounts[4]}개`);
    Console.print(`4개 일치 (50,000원) - ${rankCounts[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rankCounts[2]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts[1]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${rankCounts[0]}개`);

    const earning =
      5000 * rankCounts[4] +
      50000 * rankCounts[3] +
      1500000 * rankCounts[2] +
      30000000 * rankCounts[1] +
      2000000000 * rankCounts[0];
    const earningRate = (earning / purchasePrice) * 100;

    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default App;
